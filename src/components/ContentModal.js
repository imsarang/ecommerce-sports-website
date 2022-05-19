import React, { useState } from 'react'
import AllSports from './ContentInfo/AllSports'
import Kids from './ContentInfo/Kids'
import Men from './ContentInfo/Men'
import SportsAcc from './ContentInfo/SportsAcc'
import Women from './ContentInfo/Women'

const ContentModal = () => {
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
    const [customStyle,setStyle] = useState({
        cs1:true,
        cs2:false,
        cs3:false,
        cs4:false,
        cs5:false
    })
   
    const change1=()=>{
        setStyle({
            cs1:true,
            cs2:false,
            cs3:false,
            cs4:false,
            cs5:false
        })
        
    }
    const change2=()=>{
        setStyle({
            cs1:false,
            cs2:true,
            cs3:false,
            cs4:false,
            cs5:false
        })
    }
    const change3=()=>{
        setStyle({
            cs1:false,
            cs2:false,
            cs3:true,
            cs4:false,
            cs5:false
        })
    }
    const change4=()=>{
        setStyle({
            cs1:false,
            cs2:false,
            cs3:false,
            cs4:true,
            cs5:false
        })
    }
    const change5=()=>{
        setStyle({
            cs1:false,
            cs2:false,
            cs3:false,
            cs4:false,
            cs5:true
        })
    }
  return (
    <div style={{
        // backgroundColor:'rgba(0,0,0,0.5)',
        // height:'100vh',
        overflow:'hidden'
    }}>
        <div className='content-modal' style={{
        position:'absolute',
        top:60,
        left:0,
        backgroundColor:'white',
        width:'100%',
        zIndex:70
    }}>
        <div className='content-modal-info-1' style={{
            borderBottom:"2px solid black",
            display:"inline-flex",
            width:'100%'
        }}>
            <div style={customStyle.cs1?mystyle2:mystyle1} onClick={change1}>
                All sports
            </div>
            <div style={customStyle.cs2?mystyle2:mystyle1} onClick={change2}>
                Men
            </div>
            <div style={customStyle.cs3?mystyle2:mystyle1} onClick={change3}>
                Women
            </div>
            <div style={customStyle.cs4?mystyle2:mystyle1} onClick={change4}>
                kids
            </div>
            <div style={customStyle.cs5?mystyle2:mystyle1} onClick={change5}>
                Sports Accessories
            </div>
        </div>

        <div className='content-modal-info-2'
        style={{
                   display:'flex',
                   justifyContent:'center' 
                }}>
            {
                customStyle.cs1?<AllSports mystyle1={mystyle3} mystyle2={mystyle4} mystyle3 = {mystyle5} mystyle4={mystyle6}/>:
                customStyle.cs2?<Men mystyle1={mystyle3} mystyle2={mystyle4} mystyle3 = {mystyle5} mystyle4={mystyle6}/>:
                customStyle.cs3?<Women mystyle1={mystyle3} mystyle2={mystyle4} mystyle3 = {mystyle5} mystyle4={mystyle6}/>:
                customStyle.cs4?<Kids mystyle1={mystyle3} mystyle2={mystyle4} mystyle3 = {mystyle5} mystyle4={mystyle6}/>:
                customStyle.cs5?<SportsAcc mystyle1={mystyle3} mystyle2={mystyle4} mystyle3 = {mystyle5} mystyle4={mystyle6}/>:<AllSports mystyle1={mystyle3} mystyle2={mystyle4} mystyle3 = {mystyle5} mystyle4={mystyle6}/>
            }

        </div>
    </div></div>
  )
}

export default ContentModal