import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CLICK_CATEGORY } from '../../redux/clickingReducer'
const ContentPrint = ({ContentArr,heading}) => {
  
    const dispatch = useDispatch()
    const handleAll=(item)=>{
        dispatch(CLICK_CATEGORY({
            category:item
        }))
    }
    
    return (
     <>
                    <div className='all-sports-2-info'>
                        <div style={{
                            fontFamily: 'Bebas Neue',
                            padding: '0 0 0 5%',
                            fontSize: '20px'
                        }}>
                            <div>
                                {heading}
                            </div>

                        </div>
                    </div>
                    
                        {
                            ContentArr.map((item) => {
                                return <div className='all-sports-2-info'>
                                    <NavLink to={`/category/${item}`} style={{
                                                textDecoration:'none',
                                                color:'black'
                                            }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        backgroundColor: '#e8e9eb',
                                        padding: '5%',
                                        fontFamily: 'Oswald',
                                        margin: '2%',
                                        borderRadius: '10px'
                                    }}
                                    onClick={()=>handleAll(item)}>
                                        <div>
                                            {item}
                                        </div>
                                    </div></NavLink>
                                </div>

                            })
                        }
                    </> 
  )
}

export default ContentPrint