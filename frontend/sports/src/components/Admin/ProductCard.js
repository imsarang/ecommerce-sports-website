import React, { useEffect, useState } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { storage } from '../firebase/firebase1'
import Loading from '../Loading'
import '../styles/allProducts.css'

const ProductCard = ({ firstname,lastname,delivery,order,token,image, name, size, price, category1, category2, available, id ,load,setLoad}) => {
 
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    // const [load,setLoad]=  useState(false)
    const handleCancel = () => {
      setShow(false)
    }
    const handleYes = async()=>{
      setLoad(true)
      const result = await fetch(`/api/v2/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      const product = await result.json()
      
      // deleting image from firebase
      const fileUrl = image
      const fileRef = storage.refFromURL(fileUrl)
      fileRef.delete().then(function(){console.log(`File Deleted`);}).catch(function(e){console.log(e);})
      setShow(false)
      setLoad(false)
      navigate('/')
    }
    const handleNo = ()=>{
      setShow(false)
    }
    const handleProductView=()=>{
        if(!order)navigate(`/product/${id}`)
    }
    if(load) return <Loading/>
    return (<>
    
      <div className='admin-all' onClick={handleProductView}>
        
          <div className='admin-all-image-all'>
            <img className='admin-all-img-tag' src={image} />
          </div>
          <div className='admin-all-content'>
            <div className='admin-all-name'>
              {name}
            </div>
            <div className='admin-all-content-2'>
              <div className='admin-all-size'>Size:<span className='admin-sep'>{size}</span></div>
              {
                order?
                <div className='admin-all-quantity'>Quantity:<span className='admin-sep'>{available}</span>U</div>
                :<div className='admin-all-quantity'>Available:<span className='admin-sep'>{available}</span>U</div>
              }
              <div className='admin-all-price'>Price:<span className='admin-sep'>Rs.{price}</span></div>
            </div>
            <div className='admin-all-user'>
              Category:<span className='admin-sep'>{category1}</span><span className='admin-sep'>{category2}</span>
            </div>
          </div>
          {
            order?<></>:<div className='admin-all-trash'>
            <FaTrash onClick={() => setShow(true)} />
          </div>
          }
          {
            order?<div className='order-del'>
              <div className='order-del-1'>Ordered By:</div>
              <div className='order-del-2'>{firstname} {lastname}</div>
            </div>:<></>
          }
          {
            order?<div className='order-del'>
              <div className='order-del-1'>Delivery Location:</div>
              <div className='order-del-2'>{delivery.address1} {delivery.address2} {delivery.address3}</div>
              <div>Pincode:{delivery.pincode}</div>
            </div>:<></>
          }
        
      </div>
      
      {
        show ? <>
          <div className='remove-admin-modal'>
            <div className='admin-modal-main'>
              <div className='admin-modal-cancel' onClick={handleCancel}>
                <FaPlus style={{ 
                  transform: 'rotate(45deg)', 
                  fontSize: '20px', 
                  cursor: 'pointer',
                  margin:'2% 2% 0 0' 
                  }} />
              </div>
              <div className='admin-modal-content'>
                <div className='modal-remove-heading'>Are you sure you want to remove this product?</div>
                <div className='admin-modal-content-main'>
                  <div className='admin-image-1'>
                    <img src={image} className='modal-image' />
                  </div>
                  <div className='admin-modal-content-3'>
                    <div style={{ fontWeight: 'bold' }}>{name}</div>
                    <div>Available:<span className='admin-sep'>{available}U</span></div>
                    <div>Price:<span className='admin-sep'>Rs.{price}</span></div>
                    <div>Size:<span className='admin-sep'>{size}</span></div>
                  </div>
                </div>
              </div>
              <div className='modal-choice'>
                <div style={{width:'100%',padding:'0 1% 0 0'}} onClick={handleYes}><button className='modal-btns-1'>Yes</button></div>
                <div style={{width:'100%',padding:'0 0 0 1%'}} onClick={handleNo}><button className='modal-btns-2'>No</button></div>
              </div>
            </div>
          </div>
        </> : <></>
      }
    </>
    )
}

export default ProductCard