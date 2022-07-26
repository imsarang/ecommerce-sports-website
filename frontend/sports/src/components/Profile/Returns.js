import React, { useEffect, useState } from 'react'
import { getLocal } from '../storeInLocalStorage'

const Returns = ({ showCancel, setShowCancel, setSeconds, setProfile, setReturnSelect, load, setLoad }) => {

    const token = getLocal()
    const [returns, setReturns] = useState([])

    const showReturns = async () => {
        const result = await fetch(`/api/v1/return/get`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const ans = await result.json()
        if (ans.success) {
            console.log(ans.user);
            setReturns(ans.user[0].returns)
        }
    }
    useEffect(() => {
        showReturns()
    }, [])
    return (
        <div className='orders'>
            <div className='heading'>
                Returns
            </div>
            <div className='ordered-items'>
                {
                    returns.map((item) => {
                        return <>
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
                        </>
                    })
                }
            </div>
        </div>
    )
}

export default Returns