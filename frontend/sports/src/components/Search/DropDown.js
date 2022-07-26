import React from 'react'

const DropDown = () => {

    const handleHighToLow=async()=>{

    }
    const handleLowToHigh = async()=>{

    }
    const handleRating = async()=>{
        
    }
  return (
    <div className='drop-down'>
        <div id='low-high' onClick={handleLowToHigh}>
            Lower price to higher price
        </div>
        <div id='high-low' onClick={handleHighToLow}>
            Higher price  to lower price
        </div>
        <div id='sort-rating' onClick={handleRating}>
            Rating
        </div>
    </div>
  )
}

export default DropDown