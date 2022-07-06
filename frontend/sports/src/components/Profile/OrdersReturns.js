import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Loading from '../Loading'
import { productArray } from '../redux/cartReducer'
import { username } from '../redux/userReducer'

import '../styles/ordersReturns.css'

const OrdersReturns = ({showCancel,setShowCancel,setSeconds,setReturns,setProfile,load,setLoad}) => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user_name = useSelector(username)
    const [orders, setOrders] = useState([])
    const [show, setShow] = useState(false)
    const [x, setSelect] = useState({
        imageUrl: '',
        name: '',
        quantity: null,
        size: '',
        price: '', id: null
    })
    const showOrders = async () => {
        setLoad(true)
        const result = await fetch(`/api/v1/show/${user_name}`, { method: "GET" })
        const user = await result.json()
        if (user.success) {
            setOrders(user.user.order)
            console.log(user.user.order);
        }
        setLoad(false)
    }

    useEffect(() => {
        showOrders()
    }, [])
    const handleCancel = (item) => {
        setShow(true)
        setSelect({
            imageUrl: item.imageUrl,
            name: item.name,
            quantity: item.quantity,
            size: item.size,
            price: item.price,
            id: item._id
        })
    }
    const handleYes = async (id,quantity,name) => {
        setLoad(true)
        try{
            const result = await fetch(`/api/v1/order/remove/${user_name}/${id}`,{
                method:"PUT"
            })
            const decre = await fetch(`/api/v2/add/product/quantity`,{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:name,
                    quantity:quantity
                })
            })
            const res = await decre.json()
            setShowCancel(true)
            setSeconds(2)
            setProfile(true)
            setReturns(false)
            setShow(false)
        }
        catch(e){console.log(e);}
        setLoad(false)
    }

    if(load)return <Loading/>
    
    return (
        <div className='orders'>
            <div className='heading'>
                Orders & Returns
            </div>
            <div className='ordered-items'>
                {
                    orders.map((item) => {
                        return <>
                            <div className='order-items'>
                                <div className='order-items-image'>
                                    {/* <NavLink to={`/product/${item.id}`}> */}
                                    <img className='order-item-image' src={item.imageUrl} alt='' />
                                    {/* </NavLink> */}
                                </div>
                                <div className='order-item-content'>
                                    <div className='order-item-name'>
                                        {item.name}
                                    </div>
                                    <div className='order-item-content-2'>
                                        <div className='item-content-2-2'>

                                            <div className='order-size'>
                                                <label>Size: </label>
                                                <label>{item.size}</label>
                                            </div>
                                        </div>
                                        <div className='order-quantity'>
                                            <div>
                                                Quantity :
                                            </div>
                                            <div className='order-quan'>
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className='price-1'>Rs.{item.price}</div>

                                    </div>
                                </div>
                                <div className='cancel-order'>
                                    <button id='cancel' onClick={() => handleCancel(item)}>Cancel Order</button>
                                </div>


                            </div>
                            {
                                show ? <div className='cancel-modal-bg'>
                                    <div className='cancel-modal'>
                                        <div className='cancel-text-1'>
                                            Are you sure you want to remove this item from your order?
                                        </div>
                                        <div className='cancel-modal-content'>
                                            <div className='cancel-image'>
                                                <img src={x.imageUrl} className='cancel-img-tag' />
                                            </div>
                                            <div className='cancel-content-main'>
                                                <div className='cancel-subcontent'>Name : <span>{x.name}</span></div>
                                                <div className='cancel-subcontent'>Size : <span>{x.size}</span></div>
                                                <div className='cancel-subcontent'>Quantity : <span>{x.quantity}</span></div>
                                                <div className='cancel-subcontent'>Price : <span>{x.price}</span></div>
                                            </div>
                                        </div>
                                        <div className='cancel-text-2'>
                                            Only 85% percent of the total amount will be refunded to your account
                                        </div>
                                        <div className='cancel-modal-btns'>
                                            <button className='cancel-yes' onClick={() => handleYes(x.id,x.quantity,x.name)}>Yes</button>
                                            <button className='cancel-no' onClick={() => setShow(false)}>No</button>
                                        </div>
                                    </div>
                                </div> : <></>
                            }
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default OrdersReturns