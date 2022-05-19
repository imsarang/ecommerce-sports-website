import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { CLICK_ALL_SPORTS } from './redux/clickingReducer';

const Navbar2 = () => {
    
  const dispatch = useDispatch()

  const handleAppear = ()=>{
    dispatch(CLICK_ALL_SPORTS({}))
  }
  return (
    <div className='nav2 p-2' style={{
      backgroundColor:'rgb(45, 109, 187)',
    }}>
        <div className='nav-contain' style={{
          display:'block'
        }}>
          <div className='nav-contain-1' style={{
            display:'flex',
            color:'white',
            justifyContent:'space-between'
          }}>
          <div className='nav-contain-1-1' style={{
            display:'inline-flex'
          }}>
          <div className='navbar-2-bar pe-5' style={{
          }} onClick={handleAppear}>
          <FontAwesomeIcon className='pl-5' icon={faBars} id='nav-bar' size='2x' />
          </div>
          <div className='nav-2-brand' style={{}}>
            <NavLink to = '/' style={{  
              textDecoration:'none',
              color:'white'
            }}>BRAND</NavLink>
          
          </div>
          </div>
          <div className='nav-contain-1-2' style={{
            display:'inline-flex',
            
          }}>
          <div className='nav-2-signin me-5 p-1' style={{
            border:'2px solid white',
            fontFamily:'Bebas Neue',
            fontSize:'20px'
          }}>
          <NavLink to='/' style={{
            textDecoration:'none',
            color:'white',
            
          }}>SIGN IN</NavLink>
          </div>
          <div className='nav-2-cart me-3'>
          <NavLink to='/' style={{
              textDecoration:'none',
              color:'white',
            }}><FontAwesomeIcon className='d-block' icon={faCartPlus} size='2x'/>
            </NavLink>
          </div></div>
          </div>
          <div className='nav-contain-2 mt-2' style={{
            display:'flex',
            justifyContent:'space-between',
            color:'white'
          }}>
            <div className='nav-2-input ' style={{
              backgroundColor:'white',
              width:'75%',
              textAlign:'center',
              borderRadius:'10px'
            }}>
              <input type='text' placeholder='Search 70 sports and 5000 products'
              style={{
                width:'90%',
                padding:'2%',
                margin:'0 2% 0 0',
                border:'none',
                backgroundColor:'none'
              }}/>
              <FontAwesomeIcon icon={faSearch} style={{
                color:'black'
                }}/>
            </div>
            <div className='nav-2-address me-3' style={{
              fontFamily:'Bebas Neue',
            }}>
            <div className='nav-2-delivery' style={{
              fontSize:"15px"
            }}>Delivery Location</div>
            <div style={{
              display:'inline-flex',

            }}>
            <div className='nav-2-pincode pe-2' style={{
              color:'yellow'
            }}>560002</div>
            <div className='nav-2-change' style={{
              borderBottom:'1px solid white',
              
              fontSize:'18px'
            }}>CHANGE</div>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar2