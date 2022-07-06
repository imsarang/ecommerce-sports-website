import React, { useEffect, useState } from 'react'
import { FaCartPlus, FaCheck, FaMinus, FaPlus, FaStar, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { CLICK_CHANGE_ADDRESS, CLICK_SIGNIN, pincode } from './redux/clickingReducer'
import { NavLink, useNavigate } from 'react-router-dom'
import './styles/cart.css'

import { DECREMENT, INCREMENT, productArray, REMOVE_PRODUCT, total } from './redux/cartReducer'
import CartItems from './CartItems'
import { username } from './redux/userReducer'
const Cart = () => {


    const history = useNavigate()
    // const item = useSelector(product)

    const pin = useSelector(pincode)
    const itemArray = useSelector(productArray)
    const user_name = useSelector(username)
    const sum = useSelector(total)
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(CLICK_CHANGE_ADDRESS())
    }

    const handleCheckout = () => {
        if (!user_name) dispatch(CLICK_SIGNIN())
        else history('/checkout')
    }

    const handlePlus = (id, price) => {
        dispatch(INCREMENT({
            id: id,
            price: price
        }))
    }
    const handleMinus = (id, price) => {
        dispatch(DECREMENT({
            id: id,
            price: price
        }))
    }
    const handleTrash = (id, price, quantity) => {
        // console.log(item.id);
        dispatch(REMOVE_PRODUCT({
            id: id,
            price: price,
            quantity: quantity
        }))
    }
    return (
        <div style={{ padding: '7% 0 0 0' }}>
            <div className='cart'>
                <div className='cart1-1'>
                    <div className='cart-1-1-1'>
                        <div className='delivery'>
                            Delivering to <span style={{ fontFamily: 'Oswald' }}>{pin}</span>
                        </div>
                        <div onClick={handleChange}
                            className='change'>Change
                        </div>
                    </div>

                    <div className='eligible'>
                        <div className='eligible-1'><FaCheck
                            style={{
                                backgroundColor: 'green',
                                fontSize: '25px',
                                padding: '1%',
                                borderRadius: '20px',
                                margin: '0 3% 0 0'
                            }} /> You are eligible for</div>
                        <div className='eligible-2'>Free pickup from store</div>
                        <div className='eligible-3'>
                            {
                                2000 - sum > 0 ? <>Add products worth <span className='congrats'>Rs{2000 - sum} </span>more to your cart and get free home delivery</>
                                    : <><span className='congrats'>Congrats!</span>You are eligible for free delivery*</>
                            }</div>


                    </div>
                </div>

                <div className='cart-2'>
                    <div className='cart-content-2'>
                        <div style={{ fontFamily: 'Oswald', fontWeight: 'bold', fontSize: '20px' }}>Order Summary</div>
                        <div className='cart-content2-2'>
                            <div>Total products(Inc GST)</div>
                            <div>Rs. {sum}</div>
                        </div>

                        <div className='cart-content2-3'>
                            <div>Estimated Delivery Fee</div>
                            <div> Rs. 149</div>
                        </div>

                        <div className='cart-total'>
                            <div>Total</div>
                            <div>Rs. {sum + 149}</div>
                        </div>

                    </div>
                    <div className='cart-button'>
                        <button className='cart-btn' onClick={handleCheckout}>
                            <div className='main-btn'>
                                <FaCartPlus style={{
                                    margin: '0% 5% 0 0',
                                    fontSize: '25px'
                                }} />
                                <div>Proceed to checkout</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {
                itemArray.map((item) => {
                    return <div className='item-item'>
                        <CartItems
                            image={item.imageUrl}
                            name={item.name}
                            price={item.price}
                            id={item.id}
                            rating={item.rating}
                            quantity={item.quantity}
                            handleTrash={handleTrash}
                            handleMinus={handleMinus}
                            handlePlus={handlePlus}
                            size={item.size} />
                    </div>
                })
            }





        </div>
    )
}

export default Cart