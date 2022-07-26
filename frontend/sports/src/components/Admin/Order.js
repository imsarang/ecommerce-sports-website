import React, { useEffect, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import Loading from '../Loading'
import ProductCard from './ProductCard'

const Order = ({ token,load,setLoad}) => {

  const [orders, setOrders] = useState([])
  const [page,setPage] = useState(0)
  const [total,setTotal] = useState([])
  const showOrders = async()=>{
    const result = await fetch(`/api/v2/order/all?page=${page}&limit=${6}`,{
      method:"GET",
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    const ans = await result.json()
    console.log(ans);
    if(ans.success)
    {
      let arr = new Array(ans.totalPages).fill(0)
      setTotal(arr)
      setOrders(ans.order)
    }
  }
  useEffect(()=>{
    showOrders()
  },[page])

  const handlePagePrev = ()=>{
    if(page != 0) setPage(page-1)
  }
  const handlePageNext = ()=>{
    if(page!=total-1) setPage(page+1)
  }
  const handleViewPage = (index)=>{
    setPage(index)
  }

  if(load) return <Loading/>
  return (<>
  <div className='indicator-div'>
    <div className='go-prev-div'><button id='go-prev' onClick={handlePagePrev}><FaCaretLeft/></button></div>
    <div className='indicator-btns'>
      {
        total.map((item,index)=>{
          return <div id='indicator-btn' onClick={()=>handleViewPage(index)}>
            <button id={page == index?'ind-btn-1':'ind-btn-2'}>{index+1}</button>
          </div>
        })
      }
    </div>
    <div className='go-next-div'><button id='go-next' onClick={handlePageNext}><FaCaretRight/></button></div>
  </div>
    <div className='all-products-grid'>
    {orders.map((item)=>{
      return <div className='item-all'><ProductCard image={item.imageUrl}
      name={item.name}
      available={item.quantity}
      price={item.price}
      size={item.size}
      category1={item.product.category.category1}
      category2={item.product.category.category2}
      id={item._id} 
      load={load}
      setLoad={setLoad}
      token={token}
      order={true}
      delivery={item.delivery}
      firstname={item.user.firstname}
      lastname={item.user.lastname}
      /></div>
    })}
    </div>
  </>
  )
}

export default Order