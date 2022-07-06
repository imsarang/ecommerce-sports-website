import { faLeftLong, faLongArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Content21 from './ContentInfoPart/Content21'
import { category } from '../general'
import { useDispatch } from 'react-redux'
import { CLICK_CATEGORY } from '../redux/clickingReducer'

const AllSports = ({ setActive }) => {
    
    const dispatch = useDispatch()

    const [allSports, setAll] = useState('none')
   
    const handleAll= (item)=>{
        setAll(item)
    }
    return (
        <div>
            {
                allSports != 'none' ? <Content21 setAll={setAll} categories={allSports} /> :
                    <>
                        <div className='all-sports-head' style={{
                            fontFamily: 'Bebas Neue',
                            padding: '0 0 0 5%',
                            fontSize: '20px'
                        }}>
                            All Sports
                        </div>
                        {
                            category.map((item)=>{
                                return <div className='all-sports-2-info'>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                backgroundColor: '#e8e9eb',
                                padding: '5%',
                                fontFamily: 'Oswald',
                                margin: '2%',
                                borderRadius: '10px'
                            }} onClick={()=>handleAll(item)}>
                                <div>
                                    {item}
                                </div>
                                <FontAwesomeIcon icon={faLongArrowRight} style={{
                                    padding: '0 5% 0 0'
                                }} />
                            </div>
                        </div>
                            })
                        }
                    </>
            }
        </div>
    )
}

export default AllSports