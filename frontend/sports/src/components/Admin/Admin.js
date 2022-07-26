import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { productArray } from '../redux/cartReducer'
import '../styles/admin.css'
import AddProducts from './AddProducts'
import AllProducts from './AllProducts'
import Order from './Order'
import Return from './Return'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../traildata'
import { CLICK_SIGNIN } from '../redux/clickingReducer'
import { useNavigate } from 'react-router-dom'
import { login, username, USER_ADMIN, USER_LOGOUT } from '../redux/userReducer'
import { getLocal } from '../storeInLocalStorage'
import NoReturns from '../Info/NoReturns'
const Admin = () => {
  const itemArray = useSelector(productArray)
  const [choice, setChoice] = useState({
    order: false,
    returns: false,
    allProducts: true,
    addNew: false
  })

  const token = getLocal()

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const check_login = useSelector(login)
  const user_name = useSelector(username)
  const [forOrder, setOrder] = useState([])
  const [load, setLoad] = useState(false)
  const [returns, setReturns] = useState([])

  // let forOrder = []
  const handleLogout = async () => {
    await fetch(`api/v1/logout`)
    dispatch(USER_LOGOUT())
    localStorage.removeItem("token")
    localStorage.removeItem("expire")
    // console.log(check_login);
    navigate('/')
  }
  
  const ReturnFromDatabase = async () => {
    const result = await fetch(`/api/v2/returns`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const ans = await result.json()
    if (ans.success) {
      ans.user.map((x) => {
        if (x.returns.length > 0) {
          x.returns.map((item) => {
            setReturns([...returns, item])
          })
        }
      })
    }
  }
  useEffect(() => {
    ReturnFromDatabase()
  }, [])
  const handleOrder = () => {
    setChoice({
      order: true,
      returns: false,
      allProducts: false,
      addNew: false
    })
  }
  const handleReturn = () => {
    setChoice({
      order: false,
      returns: true,
      allProducts: false,
      addNew: false
    })
  }
  const handleAll = () => {
    setChoice({
      order: false,
      returns: false,
      allProducts: true,
      addNew: false
    })
  }
  const handleNew = () => {
    setChoice({
      order: false,
      returns: false,
      allProducts: false,
      addNew: true
    })
  }
  return (
    <div className='admin'>
      <div className='admin-1'>
        <div className={choice.order ? 'index-admin2' : 'index-admin1'} onClick={handleOrder}>
          Orders
        </div>
        <div className={choice.returns ? 'index-admin2' : 'index-admin1'} onClick={handleReturn}>
          Returns
        </div>
        <div className={choice.allProducts ? 'index-admin2' : 'index-admin1'} onClick={handleAll}>
          All products
        </div>
        <div className={choice.addNew ? 'index-add2' : 'index-add1'} onClick={handleNew}>
          <div className='index-add-1'>Add New Product</div>
          <div className='index-add-2'><FaPlus style={{ fontSize: '18px' }} /></div>
        </div>
        <div className={'index-admin1'} onClick={handleLogout}>
          Logout
        </div>
      </div>
      <div className='admin-2'>

        {
          choice.order ? <div className='admin-all-products'>
            <Order
              token={token}
              load={load}
              setLoad={setLoad} />
          </div> :
            choice.returns ?
              returns.length != 0 ? <><NoReturns /></>
                : returns.map((item) => {
                  return <Return
                    image={item.imageUrl}
                    name={item.name}
                    price={item.price}
                    size={item.size}
                    quantity={item.quantity}
                    orderedBy={'User Name'}
                    load={load}
                    setLoad={setLoad} />
                }) :
              choice.allProducts ? <div className='admin-all-products'>
                <AllProducts token={token} load={load} setLoad={setLoad} />
              </div> :
                choice.addNew ? <AddProducts setChoice={setChoice} /> : <></>
        }
      </div>
    </div>
  )
}

export default Admin