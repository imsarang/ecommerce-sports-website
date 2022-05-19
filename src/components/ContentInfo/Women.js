import React from 'react'
import { NavLink } from 'react-router-dom'
import { bottoms, footwear, innerwear, tops } from '../general'
const Women = ({mystyle1,mystyle2,mystyle3,mystyle4}) => {
  return (
    <div className='women' style={{
        display:'inline-flex'
    }}>
        <div className='women-1' style={mystyle4}>
            <div style={mystyle2}>Womens' Footwear</div>
            {
                footwear.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
        </div>
        <div className='women-2' style={mystyle4}>
            <div style={mystyle2}>Womens' Tops</div>
            {
                tops.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
        </div>
        <div className='women-3' style={mystyle4}>
            <div style={mystyle2}>Womens' Bottoms</div>
            {
                bottoms.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
        </div>
        <div className='women-4' style={mystyle4}>
            <div style={mystyle2}>Womens' Innerwear</div>
            {
                innerwear.map((item)=>{
                    return <div style={mystyle3}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
        </div>
    </div>
  )
}

export default Women