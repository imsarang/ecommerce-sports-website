import { faCancel, faCross, faLeftLong, faLeftRight, faLongArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AllSports from './ContentInfo2/AllSports'
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
        <>
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
        <AllSports/>
        </>
      }
    </div>
  )
}

export default ConModal2