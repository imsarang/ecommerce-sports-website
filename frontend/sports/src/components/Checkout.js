// Checkout component
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Address from './Profile/Address'
import { CLEAR_CART, CLEAR_CART_NOTIF, productArray, total } from './redux/cartReducer'
import { clickAddress, CLICK_ADDRESS, pincode } from './redux/clickingReducer'

import { getLocal } from './storeInLocalStorage'
import './styles/checkout.css'


const Checkout = () => {

  const token = getLocal()

  const itemArray = useSelector(productArray)
  const sum = useSelector(total)
  const pin = useSelector(pincode)
  const show = useSelector(clickAddress)
  const dispatch = useDispatch()
  const [allAddr, setAddr] = useState([])
  const [active,setActive] = useState({})
  
  const [showConfirm, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleAddressNew = () => {
    dispatch(CLICK_ADDRESS({
      click: true
    }))
  }
  const showAddressFromDatabase = async () => {
    const result = await fetch(`/api/v1/address/all`,{
      method:"GET",
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    const user = await result.json()
    console.log(user.user[0]);
    if (user.success) {
      setAddr(user.user[0].addresses)
      setActive(user.user[0].delivery)
    }
  }
  useEffect(() => {
    showAddressFromDatabase()
  }, [allAddr])

  const handleDeliveryAddress = async (item) => {
    console.log(item._id);
    const result = await fetch(`api/v1/address/delivery/${item._id}`, {
      method: "PUT",
      headers: {
        Authorization:`Bearer ${token}`
      },
      
    })
    const ans = await result.json()
    // console.log(ans.user[0]);
    setActive(ans.user[0].delivery)
  }

  const handleYes = async () => {

    const product = await fetch(`/api/v1/order`, {
      method: "PUT",
      headers: {
        Authorization:`Bearer ${token}`,
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        products: itemArray
      })

    })
   
    const ans = await product.json()
    console.log(ans);
    try{
      const result = await fetch(`api/v2/remove/product/quantity`,{
        method:"PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          pid:itemArray
        })
      })
    }
    catch(e)
    {console.log(e);}
    dispatch(CLEAR_CART({}))
    dispatch(CLEAR_CART_NOTIF({}))
    navigate('/')

  }
  return (<>
    {
      show ? <Address /> :
        <div className='checkout'>
          <div className='check-address'>
            <div className='check-address-1'>
              <div className='address-chose'>
                Choose Delivery Address
              </div>
              <div className='address-add-new' onClick={handleAddressNew}>
                Add New
              </div>
            </div>
            <div className='addresses'>
              {
                allAddr.map((item) => {
                  return <div className={item._id === active._id? 'address-ind-act' : 'address-ind'} onClick={() => handleDeliveryAddress(item)}>
                    <div className='add-name'>
                      {item.firstname} {item.lastname}
                    </div>
                    <div className='address-info'>
                      {item.address1} {item.address2} {item.address3}
                    </div>
                  </div>
                })
              }
            </div>
            <div className='checkout-confirm'>
              <div className='delivery-head'>
                Home Delivery
              </div>
              <div className='delivery-date'>
                By (day),(date)
              </div>
              <div className='delivery-pin'>
                Delivering to :
              </div>
              <div className='delivery-address'>
                    <div className='add-name'>
                      {active.firstname} {active.lastname}
                    </div>
                    <div className='address-info'>
                      {active.address1} {active.address2} {active.address3}
                    </div>
                  </div>
            </div>
            <div className='proceed'>
              <button type='button' className='proceed-btn' onClick={() => setShowModal(true)}>
                Proceed to secure payment
              </button>
            </div>
          </div>
          <div className='order-total'>
            <div className='check-order'>
              {
                itemArray.map((item) => {
                  return <div className='order-info'>
                    <div className='order-image'>
                      <img className='order-img' src={item.imageUrl} />
                    </div>
                    <div className='order-content'>
                      <div className='order-name'>
                        {item.name}
                      </div>
                      <div className='order-content-1'>
                        <div className='order-size'>
                          Size:UK/India<span style={{ padding: '0 0 0 5%' }}>{item.size}</span>
                        </div>
                        <div className='order-qty'>
                          Quantity:<span style={{ padding: '0 0 0 2%' }}>{item.quantity}</span>
                        </div>
                        <div className='order-price'>
                          Rs.{item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
            <div className='check-cost'>
              <div className='total-cost'>
                <div className='total-cost-label'>
                  Total price
                </div>
                <div className='cost-1'>
                  Rs.{sum}
                </div>
              </div>
              <div className='check-delivery'>
                <div className='delivery-label'>
                  Delivery Charges
                </div>
                <div className='cost-2'>
                  Rs.{2000 - sum > 0 ? 149 : 0}
                </div>
              </div>
              <div className='check-total'>
                <div className='check-total-label'>
                  Total
                </div>
                <div className='cost-3'>
                  Rs.{2000 - sum > 0 ? sum + 149 : sum}
                </div>
              </div>
            </div>
          </div>
          {
            showConfirm ?
              <div className='confirm-bg'>
                <div className='confirm-modal'>
                  <div className='confirm-text-1'>Do you want to confirm your order and proceed to payment?</div>
                  <div className='confirm-text-2'>You will not be permitted to change your order!</div>
                  <div className='confirm-btns'>
                    <button type='button' className='confirm-b1' onClick={handleYes}>Yes</button>
                    <button type='button' className='confirm-b2' onClick={() => setShowModal(false)}>No</button>
                  </div>
                </div>
              </div>
              : <></>}
        </div>
    }
  </>)
}

export default Checkout