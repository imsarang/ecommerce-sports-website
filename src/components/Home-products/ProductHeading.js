import React from 'react'

const ProductHeading = ({text1,text2}) => {
  return (
    <div className='product-cat' style={{
        display:'block',
        padding:'0 0 1% 0'
    }}>
<div style={{
    fontFamily:'Bebas Neue',
    fontSize:'35px',
}}>{text1}</div>
<span style={{
    fontFamily:'Bebas Neue',
    fontSize:'20px',
}}>{text2}</span>
    </div>
  )
}

export default ProductHeading