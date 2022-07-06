import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Address from './Profile/Address'
import { productArray, total } from './redux/cartReducer'
import { clickAddress, CLICK_ADDRESS, pincode } from './redux/clickingReducer'
import { username } from './redux/userReducer'
import './styles/checkout.css'
import { userAddress } from './traildata'

const Checkout = () => {

  const itemArray = useSelector(productArray)
  const sum = useSelector(total)
  const pin = useSelector(pincode)
  const show = useSelector(clickAddress)
  const dispatch = useDispatch()
  const [allAddr, setAddr] = useState([])
  const user_name = useSelector(username)
  const [addr1, setAddr1] = useState()
  const [addr2, setAddr2] = useState()
  const [showConfirm, setShowModal] = useState(false)
  const navigate = useNavigate()

  const handleAddressNew = () => {
    dispatch(CLICK_ADDRESS({
      click: true
    }))
  }
  const showAddressFromDatabase = async () => {
    const result = await fetch(`/api/v1/show/${user_name}`)
    const user = await result.json()
    if (user.success) {
      setAddr(user.user.address)
      setAddr1(user.user.delivery.address1)
      setAddr2(user.user.delivery.address2)
    }
  }
  useEffect(() => {
    showAddressFromDatabase()
  }, [])

  const handleDeliveryAddress = async (item) => {

    const { firstname, lastname, contact, address1, address2, address3, pincode, city } = item

    const result = await fetch(`api/v1/delivery/address/${user_name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fistname: firstname,
        lastname: lastname,
        contact: contact,
        address1: address1,
        address2: address2,
        address3: address3,
        pincode: pincode,
        city: city
      })
    })
  }

  const handleYes = async (item) => {

    const product = await fetch(`/api/v1/order/${user_name}/${item.name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        reviews: itemArray
      })

    })
   
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
                  return <div className={addr1 == item.address1 && addr2 == item.address2 ? 'address-ind-act' : 'address-ind'} onClick={() => handleDeliveryAddress(item)}>
                    <div className='add-name'>
                      {item.firstname} {item.lastname}
                    </div>
                    <div className='address-info'>
                      {item.address1}
                      {item.address2}
                      {item.address3}
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
                Delivering to {pin} (city name)
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