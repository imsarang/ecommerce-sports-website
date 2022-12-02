import React, { useEffect } from 'react'

const DropDown = ({setSort,sort}) => {

    
    const handleHighToLow=async()=>{
        setSort('highlow')
    }
    const handleLowToHigh = async()=>{
        setSort('lowhigh')
    }
    const handleRating = async()=>{
        setSort('rating')
    }
  return (
    <div className='drop-down'>
        <div id={sort=='lowhigh'?'current-drop':'low-high'} onClick={handleLowToHigh}>
            Lower price to higher price
        </div>
        <div id={sort=='highlow'?'current-drop':'high-low'} onClick={handleHighToLow}>
            Higher price  to lower price
        </div>
        <div id={sort=='rating'?'current-drop':'sort-rating'} onClick={handleRating}>
            Rating
        </div>
    </div>
  )
}

export default DropDown