import React, { useState } from 'react'

const PriceSlider = ({ setMinPrice, setMaxPrice, minPrice, maxPrice }) => {

  const [width,setWidth] = useState(50)
  const [minSlider,setMinSlider] = useState(25)
  const [maxSlider,setMaxSlider] = useState(75)
  const [position,setPosition] = useState(25)
  
  const handleMaxPrice = (e) => {
    if(maxPrice>=minPrice)
    {
      setMaxPrice(e.target.value *200)
      setMaxSlider(e.target.value)
      setWidth(maxSlider-minSlider)  
    }else{
      setMaxPrice(minPrice)
      setMaxSlider(minSlider)
      setWidth(0)
    }
    
  }
  const handleMinPrice = (e) => {
    setMinPrice(e.target.value*200)
    setMinSlider(e.target.value)
    setWidth(maxSlider-minSlider)
    setPosition(minSlider)
  }
  const handleMinInput = (e)=>{
    const minValue = (e.target.value/20000)*200
    setMinPrice(e.target.value)
    setMinSlider(minValue)
    setPosition(minValue)
    setWidth(maxSlider-minValue)

  }
  const handleMaxInput = (e)=>{
    const maxValue=(e.target.value/20000) *200
    setMaxPrice(e.target.value)
    setMaxSlider(maxValue)
    setWidth(maxValue-minSlider)
    setPosition(minSlider)
  }
  return (
    <div className='price-slider'>
      <div className='slider-main'>
        <div className='slider-color' style={{
          "height": "7px",
          "background-color": "#349beb",
          "width":`${width}%`,
          "left":`${position}%`,
          "position": "relative"
        }}></div>
      </div>
      <div className='slider-comp'>
        <input id='minPrice' type='range' value={minSlider} onChange={(e) => handleMinPrice(e)} />
        <input id='maxPrice' type='range' value={maxSlider} onChange={(e) => handleMaxPrice(e)} />
      </div>
      <div className='slider-input'>
        <div id='min-div'><input id='input-min' type='number' value={minPrice} onChange={(e)=>handleMinInput(e)}/></div>
        <div id='max-div'><input id='input-max' type='number' value={maxPrice} onChange={(e)=>handleMaxInput(e)}/></div>
      </div>
    </div>
  )
}

export default PriceSlider