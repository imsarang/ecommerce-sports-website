import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { CLICK_ALL_SPORTS, CLICK_CHANGE_ADDRESS, CLICK_SIGNIN, pincode } from './redux/clickingReducer';
import { admin, login } from './redux/userReducer';
import { lastCheck } from './redux/cartReducer';

const Navbar2 = () => {

  const dispatch = useDispatch()
  const address = useSelector(pincode)
  const loggedIN = useSelector(login)
  const adminCheck = useSelector(admin)
  const cartNotif = useSelector(lastCheck)
  const handleAppear = () => {
    dispatch(CLICK_ALL_SPORTS({}))
  }

  const handleSignIn = () => {
    dispatch(CLICK_SIGNIN())
  }
  const handleChangeAddr = () => {
    dispatch(CLICK_CHANGE_ADDRESS())
  }

  const handleLogin = () => {

  }
  const handleAdmin = () => {

  }
  return (
    <div className='nav2 p-2' style={{
      backgroundColor: 'rgb(45, 109, 187)',
      // position:'fixed',
      width: '100%',
      // margin:'0 0 4% 0'
    }}>
      <div className='nav-contain' style={{
        display: 'block'
      }}>
        <div className='nav-contain-1' style={{
          display: 'flex',
          color: 'white',
          justifyContent: 'space-between'
        }}>
          <div className='nav-contain-1-1' style={{
            display: 'inline-flex'
          }}>
            <div className='navbar-2-bar pe-5' style={{
            }} onClick={handleAppear}>
              <FontAwesomeIcon className='pl-5' icon={faBars} id='nav-bar' size='2x' />
            </div>
            <div className='nav-2-brand' style={{}}>
              <NavLink to='/' style={{
                textDecoration: 'none',
                color: 'white'
              }}>BRAND</NavLink>

            </div>
          </div>
          <div className='nav-contain-1-2' style={{
            display: 'inline-flex',

          }}>
            <div className='nav-2-signin me-5 p-1' style={{
              border: '2px solid white',
              fontFamily: 'Bebas Neue',
              fontSize: '20px'
            }}>
              {
                loggedIN ? <>
                  <NavLink to='/myaccount' style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                    onClick={handleLogin}>ACCOUNT</NavLink></> :
                  adminCheck ? <>
                    <NavLink to='/admin' style={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                      onClick={handleAdmin}>ADMIN</NavLink></>
                    : !loggedIN && !adminCheck ?
                      <NavLink to='#' style={{
                        textDecoration: 'none',
                        color: 'white',
                      }}
                        onClick={handleSignIn}>SIGN IN</NavLink> : <></>
              }
            </div>
            <div className='nav-2-cart me-3'>
              <NavLink to='/cart' style={{
                textDecoration: 'none',
                color: 'white',
              }}><div style={{
                display:'flex'
              }}><FontAwesomeIcon className='d-block' icon={faCartPlus} size='2x' />
                <div style={{
                  backgroundColor:'gold',
                  width:'18px',
                  height:'18px',
                  textAlign:'center',
                  fontSize:'12px',
                  borderRadius:'50%'
                }}>{cartNotif}</div>
              </div></NavLink>
            </div>
          </div>
        </div>
        <div className='nav-contain-2 mt-2' style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: 'white'
        }}>
          <div className='nav-2-input ' style={{
            backgroundColor: 'white',
            width: '75%',
            textAlign: 'center',
            borderRadius: '10px'
          }}>
            <input type='text' placeholder='Search 70 sports and 5000 products'
              style={{
                width: '90%',
                padding: '2%',
                margin: '0 2% 0 0',
                border: 'none',
                backgroundColor: 'none'
              }} />
            <FontAwesomeIcon icon={faSearch} style={{
              color: 'black'
            }} />
          </div>
          <div className='nav-2-address me-3' style={{
            fontFamily: 'Bebas Neue',
          }}>
            <div className='nav-2-delivery' style={{
              fontSize: "15px"
            }}>Delivery Location</div>
            <div style={{
              display: 'inline-flex',

            }}>
              <div className='nav-2-pincode pe-2' style={{
                color: 'yellow'
              }}>{address}</div>
              <div className='nav-2-change' style={{
                borderBottom: '1px solid white',

                fontSize: '18px'
              }}
                onClick={handleChangeAddr}>CHANGE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar2