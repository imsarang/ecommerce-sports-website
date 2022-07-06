import React from 'react'
import { FaBan } from 'react-icons/fa'

const NoReview = () => {
  return (
    <div style={{
        display:'flex',
        justifyContent:'center',
        padding:'3%',
        fontFamily:'Bebas Neue',
        fontSize:'40px',
        color:'red'
    }}>
    <div style={{
        
    }}>
        No Reviews Available
    </div>
    <div style={{
        padding:'0 0 0 2%'
    }}>
        <FaBan/>
    </div>
    </div>
  )
}

export default NoReview