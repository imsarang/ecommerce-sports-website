import React, { useState } from 'react'
import { FaCrosshairs, FaPlus, FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { CLICK_CREATE_REVIEW } from '../redux/clickingReducer'
import { durationPurchase } from '../general'
import { age } from '../general'
import { username } from '../redux/userReducer'
import { useNavigate } from 'react-router-dom'
const color = {
  gold:'gold',
  grey:'grey'
}

const ReviewForm = ({id,productName}) => {

  const [goToNext,setNext] = useState(false)

  const user_name = useSelector(username)
  const navigate = useNavigate()
  const [reviewContent,setReview] = useState({
    rating:undefined,
    title:'',
    comment:'',
    recommend:true,
    used_since:'',
    email:'',
    firstname:'',
    lastname:'',
    gender:'',
    age:'',
  })

  const formSubmit = async(e)=>{
    e.preventDefault()
    const {rating,title,comment,recommend,used_since,email,firstname,lastname,gender,age} = reviewContent
    
      try{
        const result = await fetch(`/api/v1/add-review/${user_name}/${id}`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            rate:rating,
            title:title,
            comment:comment,
            recommend:recommend,
            used_since:used_since,
            email:email,
            firstname:firstname,
            lastname:lastname,
            userGender:gender,
            age:age,
            productName:productName
          })
        })
        const ans = await result.json()
      }catch(e){
        console.log(e);
      }
   
      try{
        const result = await fetch(`/api/v2/product/rate/${id}`,{
          method:"PUT"
        })
      }catch(e){
        console.log(e);
      }
    navigate('/')
   
  }

  const rateArr = [1,2,3,4,5]
  const dispatch = useDispatch()
  const [hoverValue,setHoverValue] = useState(undefined)
  const removeModal = () => { 
    dispatch(CLICK_CREATE_REVIEW({}))
    setReview({
      rating:0,
      title:'',
      comment:'',
      recommend:true,
      used_since:'',
      email:'',
      firstname:'',
      lastname:'',
      gender:'',
      age:'',
    })
  }
  const nextPage = (e)=>{
    e.preventDefault()
    setNext(true)
  }
 
  const handleRating = value=> setReview({...reviewContent,rating:value})
  const handleMouseEnter = value => setHoverValue(value)
  const handleMouseLeave = value=>setHoverValue(undefined)
  const handleInput = (e)=>{
    setReview({
      ...reviewContent,
      [e.target.name]:e.target.value
    })
  }

  const handleSelect = (e)=>{
    setReview({
      ...reviewContent,
      used_since:e.target.value
    })
  }

  const handleSelectAge = (e)=>setReview({...reviewContent,age:e.target.value})

  return (
    <div style={{
      position: 'fixed',
      backgroundColor: 'rgb(0,0,0,0.8)',
      height: '100vh',
      width: "100%",
      zIndex: 90,
      top: '0%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
      
      <div style={{
        backgroundColor: 'white',
        position: 'fixed',
        // display: 'flex',
        // justifyContent: 'center',
        width:'90%',
        height:'90%',
        // alignItems: 'center'
      }}>
        <div className='review-create-close' onClick={removeModal}
        style={{
          float:'right',
          margin:'1.5% 1% 0 0'
        }}>
          <FaPlus style={{
            transform:'rotate(45deg)',
            padding:'10%',
            marginRight:'10%',
            color:'grey',
            cursor:'pointer'
            }} size='30px'/>
        </div>
        <div style={{
          position:'relative',
          top:'10%',
          padding:'0 5% 0 5%',
          fontFamily:'Roboto Condensed',
          fontWeight:'bold'
          }}>
      {
        goToNext?<>
        <form onSubmit={formSubmit}>
        <div className='review-create-content'>
          <div className='review-email'>
            <input type='email' placeholder='Enter your Email ID' 
            required
            name='email'
            value={reviewContent.email}
            onChange={(e)=>handleInput(e)}
            style={{
              width:'100%',
              padding:'2%',
              margin:'2% 0 0 0',
              backgroundColor:'#e8e9eb',
              border:'none'
            }}/>
          </div>
          <div className='review-name' style={{
            display:'flex',
            margin:'4% 0 0 0'
          }}>
            <div className='firstname' style={{
              margin:'0 4% 0 0',
              width:'100%'
            }}>
              <input type='text' placeholder='Firstname'
              required
              name='firstname'
              value={reviewContent.firstname}
              onChange={(e)=>handleInput(e)}
              style={{
                width:'100%',
                padding:'2%',
                backgroundColor:'#e8e9eb',
                border:'none'
              }}/>
            </div>
            <div className='lastname' style={{
              width:'100%',
            }}>
              <input type='text' placeholder='Lastname' 
              required
              name='lastname'
              value={reviewContent.lastname}
              onChange={(e)=>handleInput(e)}
              style={{
                width:'100%',
                padding:'2%',
                backgroundColor:'#e8e9eb',
                border:'none'
              }}/>
            </div>
          </div>
          <div className='personal-extra'
          style={{
            display:'flex',
            margin:'7% 0 0 0'
          }}>
            <div style={{
              width:'100%',
              margin:'0 4% 0 0'
            }}>
            Gender
              <div style={{
                margin:'4% 0 0 0'
              }}>
              <input type='radio' name='gender'
              style={{
                margin:'0 2% 0 0'
              }}required
              defaultChecked={reviewContent.gender==='Male'}
              onClick={()=>setReview({...reviewContent,gender:'Male'})}/>
              <label style={{
                margin:"0 25% 0 2%"
              }}>Male</label>
              <input type='radio' name='gender'
              style={{
                margin:'0 2% 0 2%'
              }}required
              defaultChecked={reviewContent.gender==='Female'}
              onClick={()=>setReview({...reviewContent,gender:'Female'})}/>
              <label style={{
                margin:'0 2% 0 2%'
              }}>Female</label>
            </div>
            </div>
            <div style={{
              width:'100%'
            }}>
              Age
              <div className='select-age' style={{
                margin:'1% 0 0 0'
              }}>
              <select style={{
                width:'100%',
                padding:'2%'
              }}
              value={reviewContent.age} onChange={(e)=>handleSelectAge(e)}>
              <option>Select</option>
              {
                age.map((item,index)=>{
                  return <option>{item}</option>
                })
              }
              </select>  
              </div>  
            </div>
          </div>
          <div className='check-pub' style={{
            margin:'5% 0 0 0'
          }}>
            <input type='checkbox' style={{
              margin:'0 2% 0 0'
            }} required/>
            I have read and accepted the rules of publications*
          </div>
          <div className='buttons-next'
          style={{
            // float:'right',
            display:'flex',
            justifyContent:'end',
            margin:'10% 0 0 0'
          }}>
          
            <button className='button-prev' onClick={()=>setNext(false)}
            style={{
              margin:'0 5% 0 0',
              padding:'1.5%',
              backgroundColor:'#3495eb',
              border:'none',
              color:'white',
              fontWeight:'bold',
              borderRadius:'10px 0 10px 10px'
            }}>Previous</button>
            <button type='submit'
            style={{
              margin:'0 5% 0 0',
              padding:'1.5%',
              backgroundColor:'gold',
              border:'none',
              color:'white',
              fontWeight:'bold',
              borderRadius:'0 10px 10px 10px'
            }}>Publish</button>
          
          </div>
          
        </div>
        </form>
        </>:<>
        <form onSubmit={nextPage}>
        <div className='review-create-content'
          style={{
            width: '100%',
            padding:'0%'
          }}>
          <div className='product-rating' style={{width:'100%'}}>
            Product Rating*
          </div>
          <div style={{
            display: 'flex',
            width:'100%'
          }}>
            <div className='product-start' style={{width:'45%'}}>
              {
                rateArr.map((item,index)=>{
                  return<>
                  <FaStar key={index} style={{
                    cursor:'pointer',
                    margin:'3% 4% 3% 0'
                  }}
                  color={(hoverValue||reviewContent.rating)>index?color.gold:color.grey}
                  onClick = {()=>handleRating(index+1)}
                  onMouseOver={()=>handleMouseEnter(index+1)}
                  onMouseLeave={()=>handleMouseLeave(index+1)}
                  size='20px'/>
                  </>
                })
              }
            </div>
            <div className='rate-meaning' style={
              reviewContent.rating?{
              width:'50%',
              backgroundColor:'gold',
              textAlign:'center',
              padding:'1%'
              }:{
                width:'50%',
                backgroundColor:'#e8e9eb',
                textAlign:'center',
                padding:'1%'
                }}>
            {
              reviewContent.rating==1?<div>VERY BAD</div>:
              reviewContent.rating==2?<div>BAD</div>:
              reviewContent.rating==3?<div>AVERAGE</div>:
              reviewContent.rating==4?<div>GOOD</div>:
              reviewContent.rating==5?<div>EXCELLENT</div>:
              <div> Please give a rating</div>
            } 
            </div>
          </div>
          <div className='review-title' style={{
            margin:'3% 0 0 0'
          }}>
            <div style={{padding:'0 0 1% 0'}}>Review Title*</div>
            <input type='text' placeholder='Enter a maximum of 50 characters' 
            required
            style={{
              backgroundColor:'#e8e9eb',
              padding:'1%',
              border:'none',
              width:'100%',
            }}
            name='title'
            value={reviewContent.title}
            onChange={(e)=>handleInput(e)}/>
          </div>
          <div className='review-comment' style={{
            margin:'3% 0 0 0'
          }}>
            <div style={{padding:'0 0 1% 0'}}>Comment*</div>
            <textArea type='text' placeholder='Enter a maximum of 3000 characters' 
            required
            style={{
              backgroundColor:'#e8e9eb',
              padding:'1%',
              border:'none',
              width:'100%',
            }}
            name='comment'
            onChange={(e)=>handleInput(e)}>
              {reviewContent.comment}
              </textArea>
          </div>
          <div className='recommend'
          style={{
            margin:'2% 0 0 0'
          }}>
            <div>Will you recommend this product?*</div>
            <div style={{
              margin:'1% 0 0 0',
              // backgroundColor:'#e8e9eb'
            }}>
              <label style={reviewContent.recommend?{
                width:'20%',
                textAlign:'center',
                backgroundColor:'gold',
                cursor:'pointer'
              }:{
                width:'20%',
                textAlign:'center',
                backgroundColor:'#e8e9eb',
                cursor:'pointer'
              }}
              onClick={()=>setReview({...reviewContent,recommend:true})}>Yes</label>
              <label style={reviewContent.recommend?{
                width:'20%',
                textAlign:'center',
                backgroundColor:'#e8e9eb',
                cursor:'pointer'
              }:{
                width:'20%',
                textAlign:'center',
                backgroundColor:'gold',
                cursor:'pointer'
              }}
              onClick={()=>setReview({...reviewContent,recommend:false})}>No</label>
            </div>
          </div>
          <div className='used-since'
          style={{
            margin:'2% 0 0 0'
          }}>
            Used since
            <div style={{display:'flex',width:'100%'}}>
              <select style={{
                margin:"0.5% 0 0 0",
                padding:'1%',
                width:'50%'
              }}
              value={reviewContent.used_since} onChange={(e)=>handleSelect(e)}>
                <option>Select</option>
                {
                  durationPurchase.map((item,index)=>{
                    return <option key={index}
                    >{item}</option>
                  })
                }
              </select>
              <div className='next' style={{width:'100%',float:'right'}}>
            <button type='submit' style={{
              float:'right',
              width:'20%',
              padding:'1%',
              backgroundColor:'#3495eb',
              border:'none',
              borderRadius:'10px 10px 10px 0',
              color:'white',
              fontWeight:'bold'
              }}>Next</button>
          </div>
            </div>

          </div>
          
        </div>
        </form>
        </>
      }</div>
        
        
      </div>
    </div>
  )
}

export default ReviewForm