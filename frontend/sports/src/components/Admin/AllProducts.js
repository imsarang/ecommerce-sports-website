import React, { useEffect, useState } from 'react'
import { FaCaretLeft, FaCaretRight, FaPlus, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { storage } from '../firebase/firebase1'
import Loading from '../Loading'
import '../styles/allProducts.css'
import ProductCard from './ProductCard'
const AllProducts = ({token}) => {

  const [allProducts,setAllProducts] = useState([])
  const [load,setLoad] = useState(false)
  const [page,setPage] = useState(0)
  const [totalPages,setTotalPages] = useState()
  const [pageArr,setPageArr] = useState([])
  useEffect(()=>{
    showAllProducts()
  },[page])

  const showAllProducts =async()=>{
    setLoad(true)
    const result = await fetch(`/api/v2/display/pagination?page=${page}&limit=${6}`,{
      method:"GET",
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    const product = await result.json()
    
    if(product.success){
      setAllProducts(product.product)
      setTotalPages(product.totalPages)
      let arr = new Array(product.totalPages).fill(0)
      setPageArr(arr)
      setLoad(false)
    }
  }
  
  const handlePagePrev = ()=>{
    if(page != 0) setPage(page-1)
  }
  const handlePageNext = ()=>{
    if(page!=totalPages-1) setPage(page+1)
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
        pageArr.map((item,index)=>{
          return <div id='indicator-btn' onClick={()=>handleViewPage(index)}>
            <button id={page == index?'ind-btn-1':'ind-btn-2'}>{index+1}</button>
          </div>
        })
      }
    </div>
    <div className='go-next-div'><button id='go-next' onClick={handlePageNext}><FaCaretRight/></button></div>
  </div>
  <div className='all-products-grid'>
    {allProducts.map((item)=>{
      return <div className='item-all'><ProductCard image={item.imageUrl}
      name={item.name}
      available={item.maxAvailable}
      price={item.price}
      size={item.size1}
      category1={item.category.category1}
      category2={item.category.category2}
      id={item._id} 
      load={load}
      setLoad={setLoad}
      token={token}
      order={false}/></div>
    })}
    </div>
  </>
  )
}

export default AllProducts