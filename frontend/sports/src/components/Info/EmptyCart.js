import React from 'react'
import { useNavigate } from 'react-router-dom'
import emptyCart from '../images/emptycart.png'
import '../styles/cart.css'
const EmptyCart = () => {

    const navigate = useNavigate()

    const handleHome =()=>{
        navigate('/')
    }
  return (
    <div className='empty-cart'>
        <div className='empty-image'>
            <img src={emptyCart}/>
        </div>
        <div className='redirect-div'>
            <button id='click-home-btn' onClick={handleHome}>Click to go to home page</button>
        </div>
    </div>
  )
}

export default EmptyCart