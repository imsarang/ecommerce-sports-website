import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Social } from './Footer';

const Footer2 = () => {
    const mystyle1 = {
        textDecoration:'none',
        fontFamily:'Roboto Condensed',
        fontSize:'15px',
        fontWeight:'bold',
        color:'black',
        padding:'1% 0 5% 0'
    }
    const mystyle2 ={
        border:'none',
        backgroundColor:'#e8e9eb',
        fontFamily:'Bebas Neue',
        fontSize:'20px'
    }
    const mystyle3 = {
        display:'flex',
        justifyContent:'space-between',    
    }
    const mystyle4 = {          
        backgroundColor:'#e8e9eb',
        margin:'1% 1% 1% 1%',
        borderRadius:'10px'
    }
    const [open1,setOpen1] = useState(false)
    const [open2,setOpen2] = useState(false)
    const [open3,setOpen3] = useState(false)
    const [open4,setOpen4] = useState(false)
    const [open5,setOpen5] = useState(false)
    // const getOpen1 = ()=>{setOpen1(!open1)}
  return (
    <div className='footer-2'>
        <div className='footer-info'>
            <div className='dropdown p-2 mx-3' style={{
                backgroundColor:'#e8e9eb',
                margin:'10% 1% 1% 1%',
                borderRadius:'10px'
            }}>
                <div style={mystyle3}onClick={()=>setOpen1(!open1)}><div><button className='p-2 mx-5' type='button' 
                
                style={mystyle2}>
                    SUPPORT</button></div>
                <div>
                    <FontAwesomeIcon className='p-2 me-5' icon ={faAngleDown}/>
                </div></div>
                {
                    open1?
                    <div className='dropdwon-menu mx-5 p-2'style={{
                        // backgroundColor:"blue'
                    }}>
                        <NavLink to='/' style={mystyle1}>Delivery</NavLink>
                    </div>:<></>
                }
            </div>
            <div className='dropdown p-2 mx-3' style={mystyle4}>
                <div style={mystyle3}onClick={()=>setOpen2(!open2)}><div><button className='p-2 mx-5' type='button' 
                
                style={mystyle2}>
                    OUR SERVICES</button></div>
                <div>
                    <FontAwesomeIcon className='p-2 me-5' icon ={faAngleDown}/>
                </div></div>
                {
                    open2?
                    <div className='dropdwon-menu mx-5 p-2'style={{
                        display:'block'
                    }}>
                        <div><NavLink to='/' style={mystyle1}>For Schools</NavLink></div>
                        <div><NavLink to='/' style={mystyle1}>For Corporates</NavLink></div>
                        <div><NavLink to='/' style={mystyle1}>For Sport Clubs</NavLink></div>
                    </div>:<></>
                }
            </div>
            <div className='dropdown p-2 mx-3' style={mystyle4}>
                <div style={mystyle3}onClick={()=>setOpen3(!open3)}><div><button className='p-2 mx-5' type='button' 
                
                style={mystyle2}>
                    ABOUT US</button></div>
                <div>
                    <FontAwesomeIcon className='p-2 me-5' icon ={faAngleDown}/>
                </div></div>
                {
                    open3?
                    <div className='dropdwon-menu mx-5 p-2'style={{
                        display:'block'
                    }}>
                        <div><NavLink to='/' style={mystyle1}>Who we are</NavLink></div>
                        <div><NavLink to='/' style={mystyle1}>Made in India</NavLink></div>
                    </div>:<></>
                }
            </div>
            <div className='dropdown p-2 mx-3' style={mystyle4}>
                <div style={mystyle3}onClick={()=>setOpen4(!open4)}><div><button className='p-2 mx-5' type='button' 
                
                style={mystyle2}>
                    LEGAL</button></div>
                <div>
                    <FontAwesomeIcon className='p-2 me-5' icon ={faAngleDown}/>
                </div></div>
                {
                    open4?
                    <div className='dropdwon-menu mx-5 p-2'style={{
                        // backgroundColor:"blue'
                    }}>
                        <div><NavLink to='/' style={mystyle1}>Return Policy</NavLink></div>
                        <div><NavLink to='/' style={mystyle1}>Privacy Policy</NavLink></div>
                        <div><NavLink to='/' style={mystyle1}>Terms and Conditions</NavLink></div>
                    </div>:<></>
                }
            </div>
            <div className='dropdown p-2 mx-3' style={mystyle4}>
                <div style={mystyle3}onClick={()=>setOpen5(!open5)}><div><button className='p-2 mx-5' type='button' 
                
                style={mystyle2}>
                    Discover More</button></div>
                <div>
                    <FontAwesomeIcon className='p-2 me-5' icon ={faAngleDown}/>
                </div></div>
                {
                    open5?
                    <div className='dropdwon-menu mx-5 p-2'style={{
                        margin: '1% 0 0 0',
                        display: 'block',
                        fontFamily:'Oswald'
                      }}>
                <div style={{
                    fontWeight:'bold'
                }}>
                  SPORT ADVICE FOR YOU
                </div>
                <div style={{
                  margin: '2% 0 0 0',
                  width: '100%',
                  padding: '5% 0 5% 0',
                  textAlign: 'center',
                  backgroundColor: 'white',
                }}>
                  <a href='https://blog.decathlon.in' style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: "normal"
                  }}>
                    blog.decathlon.in
                  </a>
                </div>
                <div style={{
                  margin: '5% 0 0 0',
                  fontWeight:'bold'
                }}>
                  EXPLORE SPORTS EVENTS NEAR YOU
                </div>
                <div style={{
                  margin: '2% 0 5% 0',
                  width: '100%',
                  padding: '5% 0 5% 0',
                  textAlign: 'center',
                  backgroundColor: 'white'
                }}>
                  <a href='https://www.allforsport.in' style={{
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 'normal'
                  }}>allforsport.in</a>
                </div>
              
                    </div>:<></>
                }
            </div>
            <div className='dropdown p-2 mx-3' style={mystyle4}>
                <div style={mystyle3}><div><button className='p-2 mx-5' type='button' 
                
                style={mystyle2}>
                    Follow us</button></div>
                </div>
                
                    
                    <div className='dropdwon-menu mx-5 p-2'style={{
                        display:'inline-flex'
                    }}>
                        <div className='pe-3'><NavLink to='/' style={mystyle1}><Social social='instagram' /></NavLink></div>
                        <div className='pe-3'><NavLink to='/' style={mystyle1}><Social social='youtube' /></NavLink></div>
                        <div><NavLink to='/' style={mystyle1}><Social social='twitter' /></NavLink></div>
                    </div>
                
            </div>
         
        </div>
    </div>
  )
}

export default Footer2