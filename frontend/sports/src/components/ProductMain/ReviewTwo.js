import React from 'react'
import { FaCheck, FaStar } from 'react-icons/fa'

const ReviewTwo = ({title,comment,name,gender,product_used,rate,day,month,year}) => {

    const mystyle1 = {
        color:'gold'
    }
    
  return (
    <div style={{backgroundColor:'#e8e9eb',width:'100%',padding:'2%',margin:'1% 0 0 0'}}>
        <div className='review-two-rate' style={{
            display:'flex',
            }}>
            <div style={{padding:'0 0 0 1%'}}><FaStar style={0<rate?mystyle1:{}}/></div>
            <div style={{padding:'0 0 0 1%'}}><FaStar style={1<rate?mystyle1:{}}/></div>
            <div style={{padding:'0 0 0 1%'}}><FaStar style={2<rate?mystyle1:{}}/></div>
            <div style={{padding:'0 0 0 1%'}}><FaStar style={3<rate?mystyle1:{}}/></div>
            <div style={{padding:'0 0 0 1%'}}><FaStar style={4<rate?mystyle1:{}}/></div>
            <div className='date-review' style={{
                fontFamily:'Oswald',
                padding:'0.1% 0 0 5%'
            }}>{day}-{month}-{year}</div>
        </div>
        <div className='review-contents'>
            <div className='review-title' style={{
                padding:'2% 0 0 1%',
                fontFamily:'Oswald',
                fontWeight:"bold",
                fontSize:'20px'
            }}>
                {title}
            </div>
            <div className='review-comment' style={{
                padding:"1% 0 0 1%",
                fontFamily:'Oswald',
                fontSize:'20px'
            }}>
                {comment}
            </div>
            <div style={{display:'flex', padding:'2% 0 0 1%'}}>
                <div className='review-pro-used' style={{
                   fontFamily:'Oswald',
                   fontWeight:'bold',
                   fontSize:'17px'
                }}>
                    {product_used}
                </div>
            <div className='review-name' style={{
                padding:'0 0 0 2%',
                fontFamily:"Oswald"
            }}>
                {name}
            </div>
            <div className='review-gender' style={{
                padding:'0 0 0 1%',
                fontFamily:'Oswald'
            }}>{gender}</div>
            </div>
            <div className='verified' style={{display:'flex',padding:'3% 0 0 1%'}}>
                <div className='verify-icon' style={{
                    backgroundColor:'#07ad1a',
                    padding:"0 5px 3px 5px",
                    color:'white',
                    borderRadius:"70px"
                }}>
                    <FaCheck/>
                </div>
                <div style={{padding:'0 0 0 5%',fontFamily:'Oswald'}}>Verified Purchase</div>
            </div>
        </div>
    </div>
  )
}

export default ReviewTwo