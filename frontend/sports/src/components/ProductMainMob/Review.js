
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { CLICK_CREATE_REVIEW, createReview } from '../redux/clickingReducer'
import ReviewForm from './ReviewForm'
import ReviewOne from './ReviewOne'
import ReviewTwo from '../ProductMain/ReviewTwo'

const Review = ({rating,id,productName}) => {

  
  const mystyle1 = {
    color:'gold'
  }
  const dispatch = useDispatch()
  const click_create_review = useSelector(createReview)
  const reviewCreate = ()=>{
    dispatch(CLICK_CREATE_REVIEW({}))
    console.log(click_create_review);
  }
  const [recommend,setRecommend] = useState(0)

  const showRating = async()=>{
    let count = recommend
    let count1=0
  let count2=0
  let count3=0
  let count4=0
  let count5 = 0
    const result = await fetch(`/api/v2/product/${id}`)
    const product = await result.json()
    product.product.rating.map((item)=>{
      
  
      
      item.rate==1?count1++:
      item.rate==2?count2++:
      item.rate==3?count3++:
      item.rate==4?count4++:
      count5++

      if(item.recommend)count++
    })
    setAverage(product.product.avgRate)
    const rateCount = [count5,count4,count3,count2,count1]
    setRateCount(rateCount)
    setRecommend(count)
    setPeople(product.product.rating.length)
  }
  useEffect(()=>{
    showRating()
  },[])
  const [rateCount,setRateCount] = useState([])
  const [average,setAverage] = useState(0)
  
  const [people,setPeople] = useState(0)
  return (
    <div className='review' style={{width:'100%'}}>
      <div className='review-part' style={{
        // display: 'flex',
        width:'100%'
      }}>
        <ReviewOne
        rating={average} recommend={recommend} people={people}
        mystyle1={mystyle1} reviewCreate = {reviewCreate} rateCount={rateCount}/>
        {
          click_create_review?
          <ReviewForm 
          id={id} 
          productName={productName}
          recommend={recommend}
          mystyle1={mystyle1}
          rateCount={rateCount} average={average} people={people}
          />:<></>
        }
        <div className='review-part-2' style={{
          width:'100%',
          padding:'2%'
        }}>
          {
            rating[0].map((x)=>{
              return<>
              <ReviewTwo 
        title={x.title}
        comment={x.comment}
        name={x.firstname}
        gender={x.userGender}
        product_used={x.userGender}
        rate={x.rate}
        day={x.dateOfReview.day}
        month={x.dateOfReview.month}
        year={x.dateOfReview.year}/>
              </>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Review