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
import { login, username, USER_ADMIN } from '../redux/userReducer'
const Admin = () => {
  const itemArray = useSelector(productArray)
  const [choice, setChoice] = useState({
    order: false,
    returns: false,
    allProducts: true,
    addNew: false
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const check_login = useSelector(login)
  const user_name = useSelector(username)
  const [forOrder, setOrder] = useState([])
  const [allProduct, setAllProducts] = useState([])
  const [load, setLoad] = useState(false)
  // let forOrder = []
  const handleLogout = async() => {
    await fetch(`api/v1/logout`)
    dispatch(USER_ADMIN())
    // console.log(check_login);
    navigate('/')
  }
  const OrderFromDatabase = async () => {

    setLoad(true)
    const result = await fetch('api/v2/order/all')
    const user = await result.json()
    setOrder(user.order)
    setLoad(false)
  }
  const ReturnFromDatabase = async () => {

  }
  const AllProductsFromDatabase = async () => {
    setLoad(true)
    const result = await fetch('/api/v2/show')
    const product = await result.json()
    if (product.success)
      setAllProducts(product.product)
    setLoad(false)
  }

  useEffect(() => {
    OrderFromDatabase()
    ReturnFromDatabase()
    AllProductsFromDatabase()
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
          choice.order ?
            forOrder.map((x) => {
              return x.map((item) => {
                return <><Order
                  image={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  size={item.size}
                  quantity={item.quantity}
                  orderedBy={user_name} 
                  load={load}
                  setLoad={setLoad}/>
                </>
              })
            }) :
            choice.returns ? itemArray.map((item) => {
              return <Return
                image={item.imageUrl}
                name={item.name}
                price={item.price}
                size={item.size}
                quantity={item.quantity}
                orderedBy={'User Name'} 
                load={load}
                setLoad={setLoad}/>
            }) :
              choice.allProducts ?
                allProduct.map((item) => {
                  return <><AllProducts
                    image={item.imageUrl}
                    name={item.name}
                    available={item.maxAvailable}
                    price={item.price}
                    size={item.size}
                    category1={item.category.category1}
                    category2={item.category.category2}
                    id={item._id} 
                    load={load}
                    setLoad={setLoad}/></>
                }) :
                choice.addNew ? <AddProducts setChoice={setChoice} /> : <></>
        }
      </div>
    </div>
  )
}

export default Admin