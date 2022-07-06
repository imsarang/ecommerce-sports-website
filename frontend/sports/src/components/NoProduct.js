import React from 'react'
import { FaBan } from 'react-icons/fa'

const NoProduct = ({text}) => {
  return (
    <div style={{
        padding:'2% 0 2% 4%',
        fontFamily:'Bebas Neue',
        fontSize:'50px',
        color:'red'
    }}>
        No {text} available
        <FaBan style={{
            margin:'0 0 0 2%',
            fontSize:'40px'
        }}/>
    </div>
  )
}

export default NoProduct