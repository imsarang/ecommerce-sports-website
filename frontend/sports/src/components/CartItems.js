import React from 'react'
import { FaMinus, FaPlus, FaStar, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CHECK_PRODUCT } from './redux/productReducer'

const CartItems = ({name,price,image,quantity,available,rating,id,handleTrash,handlePlus,handleMinus,size}) => {
  
    const dispatch = useDispatch()
    const handleClick=()=>{
        dispatch(CHECK_PRODUCT({
            id:id,
            name:name,
            imageUrl:image,
            rating:rating,
            price:price,
            available:available,
            size:size
          }))
    }
    
    return (
    <div className='items'>
                        <div className='items-image' onClick={handleClick}>
                            <NavLink to={`/product/${id}`}>
                                <img className='item-image' src={image} alt='' />
                            </NavLink>  
                        </div>
                        <div className='item-content'>
                            <div className='item-name'>
                                {name}
                            </div>
                            <div className='item-content-2'>
                                <div className='item-content-2-2'>
                                    <div className='rating'>{rating}<FaStar style={{
                                        margin:'0 2% 0 10%',
                                        
                                    }}color='gold'/></div>
                                    <div className='size'>
                                        <label>Size: </label>
                                        <label className='size-label'>{size}</label>
                                    </div>
                                </div>
                                <div className='quantity'>
                                    <div className='qty-1'>Qty</div>
                                    <div className='qty-2' onClick={()=>handleMinus(id,price)}><FaMinus/></div>
                                    <div className='qty-3'>{quantity}</div>
                                    <div className='qty-4' onClick={()=>handlePlus(id,price)}><FaPlus/></div>
                                </div>
                                <div className='price-1'>Rs.{price}</div>

                            </div>
                        </div>
                        <div className='item-trash-price'>
                            <FaTrash onClick={()=>handleTrash(id,price,quantity)}
                            style={{cursor:"pointer"}}/>
                        </div>

                    </div>
  )
}

export default CartItems