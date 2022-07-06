import React from 'react'

const Return = ({image,size,quantity,price,orderedBy,name}) => {
  return (
    <div className='admin-returns'>
      <div className='main-admin-order'>
        <div className='admin-order-image'>
          <img className='admin-img-tag' src={image} />
        </div>
        <div className='admin-order-content'>
          <div className='admin-order-name'>
            {name}
          </div>
          <div className='admin-order-content-2'>
            <div className='admin-order-size'>Size:<span className='admin-sep'>{size}</span></div>
            <div className='admin-order-quantity'>Quantity:<span className='admin-sep'>{quantity}</span>U</div>
            <div className='admin-order-price'>Price:<span className='admin-sep'>Rs.{price}</span></div>
          </div>
          <div className='admin-order-user'>
          Ordered By : {orderedBy}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Return