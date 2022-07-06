import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InfoModal from '../Info/InfoModal'
import { CLICK_SIGNIN } from '../redux/clickingReducer'
import { phone, username, USER_LOGIN, USER_USERNAME } from '../redux/userReducer'
import '../styles/account.css'
import { userAddress } from '../traildata'
import Address from './Address'
import AllUsers from './AllUsers'
import OrdersReturns from './OrdersReturns'
import Profile from './Profile'

const Account = () => {
    const contact = useSelector(phone)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user_name = useSelector(username)
    const [male, setMale] = useState('')
    const [profile, setProfile] = useState(true)
    const [returns, setReturns] = useState(false)
    const [address, setAddress] = useState(false)
    const [users,setUsers] = useState(false)

    const [showActive, setShowActive] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showNew,setShowNew] = useState(false)
    const [showCancel,setShowCancel] = useState(false)
    
    const [superUser,setSuper] = useState(false)
    const [seconds, setSeconds] = useState()
    const [load,setLoad] = useState(false)

    const [info, setInfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        contact: contact,
        gender: '',
        superAdmin:false,
    })

    const showUserFromDatabase = async () => {
        setLoad(true)
        const res = await fetch(`api/v1/show/${user_name}`)
        console.log(user_name);
        const user = await res.json()
        if (user.success) {
            setInfo({
                email: user.user.email,
                contact: user.user.phone,
                firstname: user.user.firstname,
                lastname: user.user.lastname,
                gender: user.user.gender,
                superAdmin:user.user.isSuperAdmin
            })
            // if(user.isSuperAdmin) setSuper(true)
        }
        setLoad(false)
    }

    const showAllUsers = async()=>{
        const user = await fetch(`api/v1/show`)
    }

    const handleLogout = async() => {
        dispatch(USER_LOGIN({}))
        
        await fetch(`api/v1/logout`)
        dispatch(USER_USERNAME({
            username: null
        }))
        navigate('/')
    }
    const handleProfile = () => {
        setProfile(true)
        setAddress(false)
        setReturns(false)
        setUsers(false)
    }
    const handleAddress = () => {
        setAddress(true)
        setProfile(false)
        setReturns(false)
        setUsers(false)
    }
    const handleOrders = () => {
        setReturns(true)
        setAddress(false)
        setProfile(false)
        setUsers(false)
    }

    const handleShowUsers = ()=>{
        setUsers(true)
        setReturns(false)
        setAddress(false)
        setProfile(false)
        
    }
    return (
        <div className='myaccount'>
            <div className='index'>
                <div className='index-con1'>
                    <div className='index-phone'>
                        {info.contact}
                    </div>
                </div>
                <div className={returns ? 'index-con2' : 'index-con1'}
                    onClick={handleOrders}>
                    <div className='index-item'>
                        Orders and returns
                    </div>
                </div>
                <div className={profile ? 'index-con2' : 'index-con1'}
                    onClick={handleProfile}>
                    <div className='index-item'>
                        My Profile
                    </div>
                </div>
                <div className={address ? 'index-con2' : 'index-con1'}
                    onClick={handleAddress}>
                    <div className='index-item'>
                        Address
                    </div>
                </div>
                {
                    info.superAdmin?<div className='index-con1' onClick={handleShowUsers}>
                    <div className='index-logout'>
                        All Users
                    </div>
                </div>:<></>
                }
                <div className='index-con1' onClick={handleLogout}>
                    <div className='index-logout'>
                        Logout
                    </div>
                </div>
            </div>
            <div className='content'>
                {
                    profile ? <><Profile
                        firstname={info.firstname}
                        lastname={info.lastname}
                        contact={info.contact}
                        username={user_name}
                        email={info.email}
                        gender={info.gender}
                        setMale={setMale}
                        setInfo={setInfo}
                        info={info}
                        male={male}
                        showUserFromDatabase={showUserFromDatabase} 
                        load={setLoad}/>
                    </> : address ? <><Address
                        user_name={user_name}
                        setProfile={setProfile}
                        setAddressIndex={setAddress}
                        showDelete={showDelete}
                        setShowActive={setShowActive}
                        setShowDelete={setShowDelete}
                        showActive={showActive}
                        seconds={seconds}
                        setSeconds={setSeconds}
                        showNew={showNew}
                        setShowNew={setShowNew}
                        load={load}
                        setLoad={setLoad}/>
                    </> : returns ? <><OrdersReturns 
                    showCancel={showCancel}
                    setShowCancel={setShowCancel}
                    setSeconds={setSeconds}
                    setProfile={setProfile}
                    setReturns={setReturns}
                    load={load}
                    setLoad={setLoad}/>
                    </> :
                    users?<><AllUsers/></>: <><Profile
                        firstname={info.firstname}
                        lastname={info.lastname}
                        username={user_name}
                        contact={info.contact}
                        email={info.email}
                        gender={info.gender}
                        male={male}
                        setMale={setMale}
                        setInfo={setInfo}
                        info={info}
                        showUserFromDatabase={showUserFromDatabase} 
                        load={load}
                        setLoad={setLoad}/></>
                }
            </div>
            {
                showActive ? <InfoModal text={'Address set as Default Address'}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    setShow={setShowActive} /> : <></>
            }
            {
                showDelete ? <InfoModal text={'Address Deleted'}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    setShow={setShowDelete} /> : <></>
            }
            {
                showNew ? <InfoModal text={'New Address Added'}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    setShow={setShowNew} /> : <></>
            }
            {
                showCancel ? <InfoModal text={'Product removed from Order'}
                    showInfo={setShowActive}
                    seconds={seconds}
                    setSeconds={setSeconds}
                    setShow={setShowCancel} /> : <></>
            }
        </div>
    )
}

export default Account