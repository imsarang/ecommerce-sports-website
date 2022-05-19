import { faCancel, faCross, faLeftLong, faLeftRight, faLongArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllSports from './ContentInfo2/AllSports'
import Kids from './ContentInfo2/Kids'
import Men from './ContentInfo2/Men'
import SportsAcc from './ContentInfo2/SportsAcc'
import Women from './ContentInfo2/Women'
import { clickAction, CLICK_ALL_SPORTS } from './redux/clickingReducer'

const ConModal2 = () => {

  const clickAct = useSelector(clickAction)
  const dispatch = useDispatch()
  const [active,setActive] = useState({
    s1:false,
    s2:false,
    s3:false,
    s4:false,
    s5:false
  })

  return (
    <div className='content-modal-2' style={{
      height:'100vh',
      position:'absolute',
      zIndex:60,
      backgroundColor:'white',
      width:'60%'
    }}>
      {
        active.s1?<AllSports setActive={setActive}/>:active.s2?<Men setActive={setActive}/>:active.s3?<Women setActive={setActive}/>:active.s4?<Kids setActive={setActive}/>:active.s5?<SportsAcc setActive={setActive}/>
        :<>
        <div className='content-2-start' style={{
          display:'flex',
          justifyContent:'space-between',
          fontFamily:'Bebas Neue',
          padding:'5%',
        }}>
          <div>DISCOVER</div>
          <div style={{
            padding:'0 5% 0 0'
          }}><FontAwesomeIcon icon={faXmark}
          onClick={()=>dispatch(CLICK_ALL_SPORTS({}))}/></div>
        </div>
        <div className='all-sports-2' style={{
          display:'flex',
          justifyContent:'space-between',
          backgroundColor:"#e8e9eb",
          padding:'5%',
          fontFamily:'Oswald',
          margin:'2%',
          borderRadius:'10px'
        }} onClick={()=>setActive({
          s1:true,
          s2:false,
          s3:false,
          s4:false,
          s5:false
        })}>
        <div>All Sports</div>
        <div style={{
          padding:'0 5% 0 0'
        }}><FontAwesomeIcon icon={faLongArrowRight}/></div>
        </div>

        <div className='men-2' style={{
          display:'flex',
          justifyContent:'space-between',
          backgroundColor:"#e8e9eb",
          padding:'5%',
          fontFamily:'Oswald',
          margin:'2%',
          borderRadius:'10px'
        }} onClick={()=>setActive({
          s1:false,
          s2:true,
          s3:false,
          s4:false,
          s5:false
        })}>
        <div>Men</div>
        <div style={{
          padding:'0 5% 0 0'
        }}><FontAwesomeIcon icon={faLongArrowRight}/></div>
        </div>

        <div className='women-2' style={{
          display:'flex',
          justifyContent:'space-between',
          backgroundColor:"#e8e9eb",
          padding:'5%',
          fontFamily:'Oswald',
          margin:'2%',
          borderRadius:'10px'
        }} onClick={()=>setActive({
          s1:false,
          s2:false,
          s3:true,
          s4:false,
          s5:false
        })}>
        <div>Women</div>
        <div style={{
          padding:'0 5% 0 0'
        }}><FontAwesomeIcon icon={faLongArrowRight}/></div>
        </div>

        <div className='kids-2' style={{
          display:'flex',
          justifyContent:'space-between',
          backgroundColor:"#e8e9eb",
          padding:'5%',
          fontFamily:'Oswald',
          margin:'2%',
          borderRadius:'10px'
        }} onClick={()=>setActive({
          s1:false,
          s2:false,
          s3:false,
          s4:true,
          s5:false
        })}>
        <div>Kids</div>
        <div style={{
          padding:'0 5% 0 0'
        }}><FontAwesomeIcon icon={faLongArrowRight}/></div>
        </div>

        <div className='sports-acc-2' style={{
          display:'flex',
          justifyContent:'space-between',
          backgroundColor:"#e8e9eb",
          padding:'5%',
          fontFamily:'Oswald',
          margin:'2%',
          borderRadius:'10px'
        }} onClick={()=>setActive({
          s1:false,
          s2:false,
          s3:false,
          s4:false,
          s5:true
        })}>
        <div>Sports Accessories</div>
        <div style={{
          padding:'0 5% 0 0'
        }}><FontAwesomeIcon icon={faLongArrowRight}/></div>
        </div>
        </>
      }
    </div>
  )
}

export default ConModal2