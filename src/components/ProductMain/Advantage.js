import React from 'react'

const Advantage = ({myArrHead}) => {
  
  
  return (
  <div style={{
    width:'100%',
    padding:'2%'
  }}>
    <div className='advantage' style={{
      width:'100%',
    }}>
      {
      myArrHead.map((item)=>{
        return <>
          <div style={{
        width:'100%',
        padding:'2%',
        margin:'0 0 2% 0',
        backgroundColor:'#e8e9eb'
      }}>
        <div style={{
          fontFamily:'Oswald',
          fontSize:'20px',
          fontWeight:'bold'
        }}>{item[0]}</div>
        <div style={{
          padding:'1% 0 0 0',
          fontFamily:'Roboto Condensed',
          fontWeight:'bold'
        }}>{item[1]}</div>
        </div>
        </>
      })
      }
      </div>
    </div>
  )
}

export default Advantage