import React from 'react'
import { FaStar } from 'react-icons/fa'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReviewOne = ({mystyle1,reviewCreate,rateCount,people,rating,recommend}) => {
  return (
    <div style={{padding:'2% 3% 0 3%',width:'100%'}}>
        <div className='review-part-1'>
          <div className='review-ratting' style={{
            display: 'flex',
            borderRadius:'10px',
            backgroundColor:'#e8e9eb',
          }}>
            <div className='rating-number' style={{
              padding:'5% 0 5% 10%',
              fontFamily:'Oswald',
              fontSize:50,
                
            }}>
              {rating}
            </div>
            <div className='rating-saved' style={{
              padding:'10% 0 4% 10%',
              
            }}>
              <div style={{display:'flex'}}>
              <div style={{margin:'0 5% 0 0'}}><FaStar/></div>
              <div style={{margin:'0 5% 0 0'}}><FaStar/></div>
              <div style={{margin:'0 5% 0 0'}}><FaStar/></div>
              <div style={{margin:'0 5% 0 0'}}><FaStar/></div>
              <div style={{margin:'0 5% 0 0'}}><FaStar/></div>
              </div>
              <div style={{
                fontFamily:'Oswald',
                margin:'0 0 0 5%'
              }}>{people} reviews</div>
            </div>
          </div>
          <div className='review-rate-part' style={{
            backgroundColor:'#e8e9eb',
            margin:'2% 0 0 0',
            padding:'5% 5% 10% 5%',
            borderRadius:'10px'}}>
            <div className='numberRec'style={{
              fontFamily:'Oswald',
              padding:'5% 5% 5% 5%',
              fontSize:'20px',
              
              
            }}>
              {recommend>0?recommend:0} people recommended this product
            </div>
            <div className='review-rate-num'>
              <div className='review-rate-5'>
                {
                  rateCount.map((item,index)=>{
                    return<>
                    <div style={{display:'flex',padding:'1%'}}>
                      <div style={{
                        padding:'0 0 0 0',
                        display:'flex',
                      }}>
                      <div style={{padding:'2%'}}><FaStar style={index<=4?mystyle1:{}} /></div>
                      <div style={{padding:'2%'}}><FaStar style={index<=3?mystyle1:{}} /></div>
                      <div style={{padding:'2%'}}><FaStar style={index<=2?mystyle1:{}} /></div>
                      <div style={{padding:'2%'}}><FaStar style={index<=1?mystyle1:{}} /></div>
                      <div style={{padding:'2%'}}><FaStar style={index<=0?mystyle1:{}} /></div>
                      </div>
                      <div style={{
                        width:'100%',
                        backgroundColor:'white',
                        margin:'0 0 0 10%',
                        borderRadius:'10px'}}>
                        <div style={{
                          width:`${(5-index)/5 * 100}%`,
                          backgroundColor:'gold',
                          height:'100%',
                          borderRadius:'5px',
                          fontFamily:"Oswald",
                          padding:'1% 0 1% 5%'
                          }}>{item}</div>
                      </div>
                </div>
                </>
                  })
                }
                
              </div>
            </div>
            
          </div>
          <div className='review-btn' style={{
                  margin:'5% 0 0 0'
                }}>
                          <button style={{
                            display:'flex',
                            width:'100%',
                            justifyContent:"space-between",
                            backgroundColor:'#0a7dcf',
                            fontFamily:'Oswald',
                            padding:'2%',
                            color:'white',
                            borderRadius:'10px',
                            border:'none'}}
                            onClick = {reviewCreate}>
                          <div style={{padding:'0 0 0 30%'}}>Write a review</div>
                          <div style={{padding:'0 10% 0 0'}}><FontAwesomeIcon icon={faCaretRight}/></div>
                          </button>
                </div>
        </div>
        </div>
  )
}

export default ReviewOne