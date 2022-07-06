import React, { useEffect, useState } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { storage } from '../firebase/firebase1'
import Loading from '../Loading'

const AllProducts = ({ image, name, size, price, category1, category2, available, id ,load,setLoad}) => {

  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  // const [load,setLoad]=  useState(false)
  const handleCancel = () => {
    setShow(false)
  }
  const handleYes = async()=>{
    setLoad(true)
    const result = await fetch(`/api/v2/delete/${id}`,{
      method:"DELETE"
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
  if(load) return <Loading/>
  return (<>
    <div className='admin-all'>
      <div className='main-admin-order'>
        <div className='admin-order-image-all'>
          <img className='admin-img-tag' src={image} />
        </div>
        <div className='admin-order-content'>
          <div className='admin-order-name'>
            {name}
          </div>
          <div className='admin-order-content-2'>
            <div className='admin-order-size'>Size:<span className='admin-sep'>{size}</span></div>
            <div className='admin-order-quantity'>Available:<span className='admin-sep'>{available}</span>U</div>
            <div className='admin-order-price'>Price:<span className='admin-sep'>Rs.{price}</span></div>
          </div>
          <div className='admin-order-user'>
            Category:<span className='admin-sep'>{category1}</span><span className='admin-sep'>{category2}</span>
          </div>
        </div>
        <div className='admin-trash'>
          <FaTrash style={{ margin: '4% 4% 0 0', cursor: 'pointer' }}
            onClick={() => setShow(true)} />
        </div>
      </div>
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

export default AllProducts