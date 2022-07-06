import React from 'react'

const BodyPara = ({text1,text2,text3,text4,text5,text6,text7,text8}) => {
  
  const mystyle1={
    padding:'2%',
    fontFamily:'Oswald'
  }
  
  return (
    <div>
      <div style={mystyle1}>
        {text1}
      </div>
      <div style={mystyle1}>
        {text2}
      </div>
      <div style={mystyle1}>
        {text3}
      </div>
      <div style={mystyle1}>
        {text4}
      </div>
      <div style={mystyle1}>
        {text5}
      </div>
      <div style={mystyle1}>
        {text6}
      </div>
      <div style={mystyle1}>
        {text7}
      </div>
      <div style={mystyle1}>
        {text8}
      </div>
    </div>
  )
}

export default BodyPara