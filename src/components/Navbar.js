import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faGear, faBook, faSearch, faBars, faUser, faStore, faChartBar, faServer, faStoreAlt, faMessage, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles/navbar.css"
import decaBrand from './images/deca-brand.svg'
import {useDispatch, useSelector} from 'react-redux'
import { clickAction, CLICK_ALL_SPORTS } from './redux/clickingReducer';
const Navbar = () => {
  const dispatch = useDispatch()
  // const clickAct = useSelector(clickAction)
  const handleAppear = ()=>{
    dispatch(CLICK_ALL_SPORTS({}))
    // console.log(clickAct);
  }
  return (
    <div className='nav'>
      <div className='d-flex container-fluid pt-1'>
        <div className='navbar-one d-flex align-items-center pr-5'>
          <div className='nav-bar d-flex ps-5 pt-3' onClick={handleAppear}>
            <FontAwesomeIcon className='pl-5' icon={faBars} id='nav-bar' size='2x' />
          </div>
          <div className='nav-sports px-3' style={{ 'color': 'white' }}
          onClick={handleAppear}>
            <span className='sports'>All </span><span className='sports'>Sports</span>
          </div>
          <div className='navbar-brand px-4' style={{ 'color': 'white' }}>
            {/* <img src={decaBrand} style={{ 'border': '1px solid white', 'width': '95%' }} /> */}
            <NavLink to='/' style={{
              textDecoration:'none',
              color:'white'
            }}>BRAND</NavLink>
          </div>
        </div>
        <div className='navbar-two d-flex align-center flex-grow-1 mr-5'>
          <div className="navbar-input d-flex align-center flex-grow-1 mr-5">
            <input type='text' id='nav-in' className='ps-2'
              placeholder='Search 70 sports and 5000 products'
              style={{ 'font-family': 'Arial', 'font-size': '14px' }} />
            <FontAwesomeIcon icon={faSearch} id='seIcon' />
          </div>
          <div className='navbar-del ps-5 mr-5'>
            <span className='loc d-block pt-2 '
              style={{
                'color': 'white',
                'font-family': 'Arial',
                'font-size': '14px'
              }}
            >Delivery Location</span>
            <span className='loc' style={{ 'color': 'yellow', 'font-family': 'Bebas Neue' }}>560002</span>
            <NavLink to='#' style={{ 'color': 'white', 'margin-left': 5, 'font-family': 'Bebas Neue' }}>CHANGE</NavLink>
          </div>
        </div>
        <div className='navbar-three d-flex justify-content-between text-center align-items-center p-2'>
          <div className='navbar-user px-3' style={{ 'color': 'white' }}>
            <NavLink to='/' style={{
              textDecoration:'none',
              color:'white'
            }}><FontAwesomeIcon className='d-block' icon={faUser} />
            <span style={{ 'font-size': '13px', 'font-family': 'Arial' }}>Sign in </span>
            </NavLink>
          </div>
          {/* <div className='navbar-store px-3' style={{ 'color': 'white' }}>
            <FontAwesomeIcon className='d-block' icon={faStore} />
            <span style={{ 'font-size': '13px', 'font-family': 'Arial' }}>My Store</span>
          </div> */}
          <div className='navbar-support px-3' style={{ 'color': 'white' }}>
            <FontAwesomeIcon className='d-block' icon={faMessage} />
            <span style={{ 'font-size': '13px', 'font-family': 'Arial' }}>Support</span>
          </div>
          <div className='navbar-cart px-3 pe-5' style={{ 'color': 'white' }}>
          <NavLink to='/' style={{
              textDecoration:'none',
              color:'white'
            }}><FontAwesomeIcon className='d-block' icon={faCartPlus} />
            <span style={{ 'font-size': '13px', 'font-family': 'Arial' }}>Cart</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar