import React from 'react'
import { NavLink } from 'react-router-dom'
import { bottoms, footwear, innerwear, tops } from '../general'

const Men = ({mystyle1,mystyle2,mystyle3,mystyle4}) => {
  return (
    <div className='mens' style={{
        display:'inline-flex',
        // margin:'0 5% 0 5%'
    }}>
        <div className='mens-1' style={mystyle4}>
            <div style={mystyle2}>Mens' Footwear</div>
            {
                footwear.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
        </div>
        <div className='mens-2' style={mystyle4}>
            <div style={mystyle2}>Mens' Tops</div>
            {
                tops.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
        </div>
        <div className='mens-3' style={mystyle4}>
            <div style={mystyle2}>Mens' Bottoms</div>
            {
                bottoms.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
        </div>
        <div className='mens-4' style={mystyle4}>
            <div style={mystyle2}>Mens' Innerwear</div>
            {
                innerwear.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
        </div>
    </div>
  )
}

export default Men