import React from 'react'
import { NavLink } from 'react-router-dom'
const SportsAcc = ({mystyle1,mystyle2,mystyle3,mystyle4}) => {
  return (
    <div className='sports-acc' style={{
      display:'inline-flex'
  }}>
      <div className='sports-acc-1' style={mystyle4}>
          <div style={mystyle2}>Bags & Backpacks</div>
          <div style={mystyle3}><NavLink to='/' style={mystyle1}>Sports Bags</NavLink></div>
          <div style={mystyle3}><NavLink to='/' style={mystyle1}>Locks</NavLink></div>
      </div>
      <div className='sports-acc-2'  style={mystyle4}>
          <div style={mystyle2}>Clothing accessories</div>
          <div style={mystyle3}><NavLink to='/' style={mystyle1}>Caps</NavLink></div>
          <div style={mystyle3}><NavLink to='/' style={mystyle1}>Socks</NavLink></div>
          <div style={mystyle3}><NavLink to='/' style={mystyle1}>Towels</NavLink></div>
          
      </div>
      <div className='sports-acc-3' style={mystyle4}>
          <div style={mystyle2}>Bottles & Food Storage</div>
          <div style={mystyle3}><NavLink to='/' style={mystyle1}>Water Bottles</NavLink></div>
          <div style={mystyle3}><NavLink to='/' style={mystyle1}>Food Box</NavLink></div>
      </div>
      <div className='sports-acc-4' style={mystyle4}>
          <div style={mystyle2}>Sports Watches</div>
          <div style={mystyle3}><NavLink to='/'style={mystyle1}>Watches</NavLink></div>
          <div style={mystyle3}><NavLink to='/' style={mystyle1}>Stopwatches</NavLink></div> 
      </div>
  </div>
  )
}

export default SportsAcc