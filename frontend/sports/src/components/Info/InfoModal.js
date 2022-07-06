import React, { useEffect, useState } from 'react'
import '../styles/info.css'

const InfoModal = ({ setShow, seconds, setSeconds ,text}) => {
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1)
      if (seconds === 0) {
        setSeconds(0);
        setShow(false)
      }
    }, 1000)
    return () => { clearInterval(timer) }
  }, [seconds])
  return (
    <div className='info-bg'>
      <div className='info-main'>
        {text}
      </div>
    </div>
  )
}

export default InfoModal