import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { CLICK_SIZE_CHART } from '../redux/clickingReducer'
import '../styles/sizechart.css'
import { menSizeUpper,menSizeLower,womenSizeUpper,womenSizeLower,kidsUpper,kidsLower} from '../general'
import { } from '../general'

const SizeChart = ({ category1,category2}) => {

    const dispatch = useDispatch()

    const [upper,setUpper] = useState(true)
    
    const handleRemove = () => {
        dispatch(CLICK_SIZE_CHART())
    }
    
    const handleUpper=()=>{
        setUpper(true)
    }
    const handleLower=()=>{
        setUpper(false)
    }
    return (
        <div className='sizechart'>
            <div className='sizechart-main'>
                <div className='size-remove'>
                    <FaPlus style={{ transform: 'rotate(45deg)', fontSize: '25px' }} onClick={handleRemove} />
                </div>
                <label className='inches'>(inches)</label>
                <div className='size-content'>
                    <div className='size-chose'>
                        <button onClick={handleUpper} className={upper?'size-active':'size-btn'}>Upper</button>
                        <button onClick={handleLower} className={upper?'size-btn':'size-active'}>Lower</button>
                    </div>
                    <table className='table'>
                        {
                            category2 === 'Men'&&upper?
                                <tr className='table-head'>
                                    <th>Website Size</th>
                                    <th>Chest Size</th>
                                    <th>Shoulder Length</th>
                                    <th>Front Length</th>
                                    <th>Sleeve Length</th>
                                </tr> :
                            category2==='Men'&&!upper?<tr className='table-head'>
                            <th>Website Size</th>
                            <th>Waist Size</th>
                            <th>Bottoms</th>
                        </tr> :
                                category2 === 'Women'&&upper?
                                    <tr className='table-head'>
                                        <th>Website Size</th>
                                        <th>Chest Size</th>
                                        <th>Shoulder Length</th>
                                        <th>Sleeve Length</th>
                                    </tr> : 
                                    category2==='Women'&&!upper?<tr className='table-head'>
                                    <th>Website Size</th>
                                    <th>Waist Size</th>
                                    <th>Bottoms</th>
                                    
                                </tr> :
                                category2==='Kids'&&upper?
                                <tr className='table-head'>
                                    <th>Website Size</th>
                                    <th>Chest Size</th>
                                    <th>Front Length</th>    
                                </tr>:
                                category2==='Kids'&&!upper?
                                <tr className='table-head'>
                                    <th>Website Size</th>
                                    <th>Waist Size</th>                
                                </tr>:<></>
                        }
                        {
                            category2 === 'Men'&&upper?
                                menSizeUpper.map((item) => {
                                    return <tr>
                                        <td>{item.website}</td>
                                        <td>{item.chest}</td>
                                        <td>{item.shoulder}</td>
                                        <td>{item.front}</td>
                                        <td>{item.sleeve}</td>
                                    </tr>
                                }) :
                                category2==='Men'&&!upper?
                                menSizeLower.map((item) => {
                                    return <tr>
                                        <td>{item.website}</td>
                                        <td>{item.waist}</td>
                                        <td>{item.bottoms}</td>
                                    </tr>
                                }) :
                                category2 === 'Women'&&upper?
                                    womenSizeUpper.map((item) => {
                                        return <tr>
                                                <td>{item.website}</td>
                                                <td>{item.chest}</td>
                                                <td>{item.shoulder}</td>
                                                <td>{item.sleeve}</td>
                                        </tr>
                                    }) :
                                    category2==='Women'&&!upper? 
                                    womenSizeLower.map((item) => {
                                        return <tr>
                                            <td>{item.website}</td>
                                            <td>{item.waist}</td>
                                            <td>{item.bottom}</td>
                                        </tr>
                                    }):
                                    category2==='Kids'&&upper?
                                    kidsUpper.map((item) => {
                                        return <tr>
                                            <td>{item.website}</td>
                                            <td>{item.chest}</td>
                                            <td>{item.front}</td>
                                        </tr>
                                    }):
                                    category2==='Kids'&&!upper?
                                    kidsLower.map((item) => {
                                        return <tr>
                                            <td>{item.website}</td>
                                            <td>{item.waist}</td>
                                        </tr>
                                    }):<></>
                        }
                    </table>
                    
                </div>
            </div>

        </div>
    )
}

export default SizeChart