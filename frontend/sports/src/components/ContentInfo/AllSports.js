import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cycling, outdoor, racket, roller, running, target, team, water } from '../general'
import { CLICK_ALL_SPORTS, CLICK_CATEGORY } from '../redux/clickingReducer'
const AllSports = ({mystyle1,mystyle2,mystyle3,mystyle4}) => {
    
    // const trial='hello'
    const dispatch = useDispatch()
    const handleCategory = (item)=>{
        // dispatch(CLICK_ALL_SPORTS({}))
        dispatch(CLICK_CATEGORY({
            category:item
        }))
        
    }
    return (
        <div className='allSports'>
            <div className='all-sports-1' style={{
                display: 'inline-flex',
                // border: '2px solid black'
            }}>
                <div className='all-sports-1-1' style={mystyle4}>
                    <div style={mystyle2}>Outdoor Sports</div>
                    {
                outdoor.map((item,index)=>{
                    return <div key={index}style={mystyle3} onClick={()=>handleCategory(item)}><NavLink to={`/category/${item}`} style={mystyle1} >{item}</NavLink></div>
                })
            }
                </div>
                <div className='all-sports-1-2' style={mystyle4}>
                    <div style={mystyle2}>Running and Walking</div>
                    {
                running.map((item)=>{
                    return <div style={mystyle3} onClick={()=>handleCategory(item)}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }

                </div>
                <div className='all-sports-1-3' style={mystyle4}>
                    <div style={mystyle2}>Racket Sports</div>
                    {
                racket.map((item)=>{
                    return <div style={mystyle3} onClick={()=>handleCategory(item)}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
                </div>
                <div className='all-sports-1-4' style={mystyle4}>
                    <div style={mystyle2}>Team Sports</div>
                    {
                team.map((item)=>{
                    return <div style={mystyle3} onClick={()=>handleCategory(item)}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
                </div>
            </div>

            <div className='all-sports-2' style={{
                display: 'inline-flex',
                // border:"2px solid black"
            }}>
                <div className='all-sports-2-1' style={mystyle4}>
                    <div style={mystyle2}>Water Sports</div>
                    {
                water.map((item)=>{
                    return <div style={mystyle3} onClick={()=>handleCategory(item)}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
                </div>
                <div className='all-sports-2-2' style={mystyle4}>
                    <div style={mystyle2}>Target Sports</div>
                    {
                target.map((item)=>{
                    return <div style={mystyle3} onClick={()=>handleCategory(item)}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
                </div>
                <div className='all-sports-2-3' style={mystyle4}>
                    <div style={mystyle2}>Cycling</div>
                    {
                cycling.map((item)=>{
                    return <div style={mystyle3} onClick={()=>handleCategory(item)}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }
                </div>
                <div className='all-sports-2-4' style={mystyle4}>
                    <div style={mystyle2}>Roller Sports</div>
                    {
                roller.map((item)=>{
                    return <div style={mystyle3} onClick={()=>handleCategory(item)}><NavLink to={`/category/${item}`} style={mystyle1}>{item}</NavLink></div>
                })
            }

                </div>
            </div>
        </div>
    )
}

export default AllSports