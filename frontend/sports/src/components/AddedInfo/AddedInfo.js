import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import AddedInfoPart from './AddedInfoPart';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {ShieldCheck} from 'react-bootstrap-icons'
const AddedInfo = () => {
    const check=()=>{
        return <ShieldCheck/>
    }
    return (
        <div className='added' style={{
            'display': 'flex',
            'justify-content': 'center',

        }}>

            <AddedInfoPart text='2 Years Warranty*' link='/warranty' icon = {'ShieldCheck'}/>
            <AddedInfoPart text='Free Pick up from Store' link='/pickup' />
            <AddedInfoPart text='90 days return policy' link='/return-policy'/>
        </div>
    )
}

export default AddedInfo
export const Check = ()=>{
    return <ShieldCheck/>
}