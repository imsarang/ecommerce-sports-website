import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { CHECK_PRODUCT } from '../redux/productReducer'
import '../styles/mySlider.css'

const SliderCard = ({ image, imgRef, name, price, available, rating, id, category1, category2, size,mrp }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleProduct = () => {
    
    navigate(`product/${id}`)

  }
  useEffect(() => {
    // console.log(category3);
  }, [])
  return (
    <NavLink to={`/product/${id}`} className='product-card' ref={imgRef} style={{
      textDecoration: 'none',
      color: 'black'
    }}
      onClick={handleProduct}>
      <div className='product-image'>
        <img src={image} alt='alt' className='image' />
      </div>
      <div className='card-content'>
        <div className='price'>
          Rs.{price}
        </div>
        <div className='name'>
          {name}
        </div>
        <div className='rating'>
          {
            rating==0||rating==null||rating==''?<>Unrated</>:<><div style={{padding:'0 0 0 2%'}}>{rating}/5</div>
            <div style={{
              padding: '0 1% 1% 2%'
            }}><FaStar color={'gold'} /></div></>
          }
        </div>
        <div className='slider-size'>Size:{size}</div>
      </div>
    </NavLink>
  )
}

export default SliderCard