import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllSports from './ContentInfo/AllSports'
import { categoryClick, CLICK_CATEGORY_1, CLICK_CATEGORY_2 } from './redux/clickingReducer'

const ContentModal = () => {
    // const category = useSelector(categoryClick)
    const dispatch = useDispatch()

    const mystyle1={
        margin:'1% 4% 0% 2%',
        fontFamily:'Bebas Neue',
        cursor:'pointer'
    }
    const mystyle2 = {
        margin:"1% 4% 0% 2%",
        fontFamily:'Bebas Neue',
        borderBottom : '5px solid blue',
        borderRadiusBottom:'10px',
        cursor:'pointer'
    }
    const mystyle3 = {
        textDecoration:'none',
        color:'#282929'
    }
    const mystyle4 = {
        fontWeight:'bold',
        fontFamily:'Oswald',
        margin:'1% 0 10% 0',
        fontSize:'25px'
    }
    const mystyle5={
        fontFamily:'Oswald',
        fontSize:'18px',
        margin:'0 0 3% 0'
    }
    const mystyle6={
        margin:'5% 15% 5% 0',
        padding:''
    }
    
    
  return (
    <div style={{
        position:'fixed',
        top:60,
        backgroundColor:'rgba(0,0,0,0)',
        width:'100%',
        height:'100vh',
        zIndex:90,
        overflow:'hidden'
    }}>
        <div className='content-modal' style={{
        position:'fixed',
        // top:60,
        // left:0,
        backgroundColor:'white',
        width:'100%',
        // height:'100vh',
        // zIndex:70,
        // overflow:'hidden'
    }}>
        <div className='content-modal-info-1' style={{
            borderBottom:"2px solid black",
            display:"inline-flex",
            width:'100%'
        }}>
          
            
        </div>

        <div className='content-modal-info-2'
        style={{
                   display:'flex',
                   justifyContent:'center' 
                }}>
            {
                <AllSports mystyle1={mystyle3} mystyle2={mystyle4} mystyle3 = {mystyle5} mystyle4={mystyle6}/>
            }

        </div>
    </div></div>
  )
}

export default ContentModal