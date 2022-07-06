import { faArrowRightLong, faArrowsAltV, faLevelDownAlt, faLevelUpAlt, faStoreAlt, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import 'react-bootstrap-icons'
import { ShieldCheck,BagFill,ArrowDownUp, ArchiveFill } from 'react-bootstrap-icons'

const AddedInfoPart = ({ text, link}) => {
    return (
        <div style={{
            'display': 'inline',
            // 'padding':'0 5px 0 5px',
            'text-align': 'center',
            'width': '100%',
            'background-color': "#A1E3D8",
            'padding': '1.5% 0 1.5% 0',
            'margin': '1% 0 0 0',
            'font-family':'Arial',
            'font-size':'15px'
        }}>
            <NavLink to={`${link}`} className='added-info'
                style={{

                    'padding': '2% 0 2% 0',
                    'border-left': '1px solid black',
                    'display': 'flex',
                    'justify-content': 'center',
                    textDecoration: 'none',
                    color: 'black'
                }}>
                <div className='added-icon'>
                    {/* <FontAwesomeIcon icon={icon}/> */}
                    {/* {icon} */}
                    <AddIcon link = {link} size='20'/>
                    
                </div>
                <div className='added-text' style={{
                    'display': 'inline'
                }}>
                    {text}
                </div>
                <div className='click-icon' style={{
                    'padding': '0 0 0 2%'
                }}>
                    <FontAwesomeIcon icon={faArrowRightLong}
                        style={{
                            'background-color': 'white',
                            'width': '12px',
                            'height': '10px',
                            'padding': '30%',
                            'border-radius': '100px'
                        }} />
                </div>
            </NavLink>
        </div>
    )
}

export default AddedInfoPart

export const AddIcon = ({link,size})=>{
    if(link === '/warranty')
    return <ShieldCheck style={{
        marginRight :'10px'
    }}size={size}/>
    else if(link === '/pickup')
    return <BagFill style={{
        marginRight :'10px'
    }} size={size}/>
    else if(link === '/return-policy')
    return<ArrowDownUp
        style={{
            marginRight:'10px',
            transform:'rotate(90deg)'
        }} size={size}/>
        
    else if(link === '/home-delivery')
    return <ArchiveFill style={{
        marginRight:'5px'
    }} size={size}/>
}