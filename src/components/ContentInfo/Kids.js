import React from 'react'
import { NavLink } from 'react-router-dom'
import { bottoms, footwear, innerwear, tops } from '../general'
const Kids= ({mystyle1,mystyle2,mystyle3,mystyle4}) => {
  return (
    <div className='kids' style={{
      display:'inline-flex'
  }}>
      <div className='kids-1' style={mystyle4}>
          <div style={mystyle2}>Kids' Footwear</div>
          {
                footwear.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
      </div>
      <div className='mens-2'  style={mystyle4}>
          <div style={mystyle2}>Kids' Tops</div>
          {
                tops.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
      </div>
      <div className='mens-3' style={mystyle4}>
          <div style={mystyle2}>Kids' Bottoms</div>
          {
                bottoms.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
          
      </div>
      <div className='mens-4' style={mystyle4}>
          <div style={mystyle2}>Kids' Innerwear</div>
          {
                innerwear.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
      </div>
  </div>
  )
}

export default Kids