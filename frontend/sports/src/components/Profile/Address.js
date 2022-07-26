import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import InfoModal from '../Info/InfoModal'
import Loading from '../Loading'
import { clickAddress, CLICK_ADDRESS, PINCODE } from '../redux/clickingReducer'
import { getLocal } from '../storeInLocalStorage'
import '../styles/address.css'


const Address = ({ user_name,load,setLoad, setProfile,showNew,setShowNew, setAddressIndex ,showActive,setShowActive,showDelete,setShowDelete,setSeconds}) => {

    const show = useSelector(clickAddress)
    const dispatch = useDispatch()
    // const [style, setStyle] = useState(false)
    // const [seconds,setSeconds] = useState()
    const token = getLocal()

    const [addr, setAddress] = useState({
        id:null,
        firstname: '',
        lastname: '',
        contact: null,
        address1: '',
        address2: '',
        address3: '',
        pincode: null,
        city: '',
    })
    const [allAddress, setAllAddress] = useState([])
    const [edit, setEdit] = useState(false)
    const [activeID, setActiveID] = useState()
    const [editPlace,setEditPlace] = useState()

    const showAddressFromDatabase = async () => {
        setLoad(true)
        const result = await fetch(`api/v1/address/all`, {
            method: "GET",
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        const user = await result.json()
        
        if (user.success)
            setAllAddress(user.user[0].addresses)
        setActiveID(user.user[0].active)
        setLoad(false)
    }
 
    useEffect(() => {
        showAddressFromDatabase()
    }, [])

    const handleInputs = (e) => {
        setAddress({ ...addr, [e.target.name]: e.target.value })
    }
    const handleActive = async (place) => {
        setLoad(true)
        const result = await fetch(`/api/v1/address/setactive/${place._id}`, {
            method: "PUT",
            headers: {
                Authorization:`Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        setActiveID(place._id)
        setSeconds(2)
        setShowActive(true)
        setProfile(true)
        setAddressIndex(false)
        setLoad(false)
        dispatch(PINCODE({
            pincode:place.pincode
        }))
    }
    const handleEdit = async (place) => {
        setLoad(true)
        setEdit(true)
        setAddress({
            id:place._id,
            firstname: place.firstname,
            lastname: place.lastname,
            contact: place.contact,
            address1: place.address1,
            address2: place.address2,
            address3: place.address3,
            pincode: place.pincode,
            city: place.city
        })
        dispatch(CLICK_ADDRESS({
            click: true
        }))
        setEditPlace(addr)
        setLoad(false)
        // setProfile(true)
        // setAddressIndex(false)
    }

    const handleEditAddressToDatabase=async()=>{
        console.log(editPlace);
        const result = await fetch(`/api/v1/address/update/${editPlace.id}`,{
            method:'PUT',
            headers:{
                Authorization:`Bearer ${token}`,
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                firstname: editPlace.firstname,
            lastname: editPlace.lastname,
            contact: editPlace.contact,
            address1: editPlace.address1,
            address2: editPlace.address2,
            address3: editPlace.address3,
            pincode: editPlace.pincode,
            city: editPlace.city
            })
        })
        // setShowEdit(true)
    }

    const handleDelete = async (place) => {
        setLoad(true)
        const result = await fetch(`/api/v1/address/delete/${place._id}`, {
            method: "PUT",
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        setProfile(true)
        setAddressIndex(false)
        setSeconds(2)
        setShowDelete(true)
        setLoad(false)
    }
    const addAddressToDatabase = async () => {
        setLoad(true)
        try {
            const res = await fetch(`/api/v1/address`, {
                method: "PUT",
                headers: {
                    Authorization:`Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: addr.firstname,
                    lastname: addr.lastname,
                    contact: addr.contact,
                    address1: addr.address1,
                    address2: addr.address2,
                    address3: addr.address3,
                    pincode: addr.pincode,
                    city: addr.city
                })
            })

            if (res) {
                const user = await res.json()
                console.log(user);
            }
        }
        catch (e) { console.log(e); }
        setLoad(false)
    }

    
    const handleAddAddress = () => {
        setEdit(false)
        dispatch(CLICK_ADDRESS({
            click: true
        }))
        setAddress({
            firstname: '',
            lastname: '',
            contact: null,
            address1: '',
            address2: '',
            address3: '',
            pincode: null,
            city: '',
        })

    }
    const handleClose = () => {
        dispatch(CLICK_ADDRESS({
            click: false
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(CLICK_ADDRESS({
            click: false
        }))
        if(edit) handleEditAddressToDatabase()
        else   addAddressToDatabase()

        setProfile(true)
        setAddressIndex(false)
        setShowNew(true)
        setSeconds(2)
    }
    if(load) return <Loading/>
    return (
        <div className='address'>
            <div className='add-heading'>
                Your Address
            </div>
            <div className='add-address' onClick={handleAddAddress}>
                <div className='add-1'>
                    Add Address
                </div>
                <div className='add-icon'>
                    <FaPlus />
                </div>
            </div>
            {
                show ? <form onSubmit={handleSubmit}>
                    <div className='show-address'>
                        <div className='address-content'>
                            <div className='new-heading'>
                                <div>Add New Address</div>
                                <div onClick={handleClose}><FaPlus style={{
                                    transform: 'rotate(45deg)',
                                    fontSize: '20px',
                                    cursor: 'pointer',
                                }} /></div>
                            </div>
                            <div className='new-content'>
                                <div className='new-con-head'>
                                    Content
                                </div>
                                <div className='content-1'>
                                    <div className='content-1-1'>
                                        <div className='content-input-1'>
                                            <input
                                                className='new-addr-input-1' type='text'
                                                name='firstname'
                                                value={addr.firstname}
                                                onChange={(e) => handleInputs(e)}
                                                placeholder='*First Name'
                                                required />
                                        </div>

                                        <div className='content-input-3'>
                                            <input
                                                type='text'
                                                className='new-addr-input-1'
                                                name='lastname'
                                                value={addr.lastname}
                                                onChange={(e) => handleInputs(e)}
                                                placeholder='*Last Name'
                                                required />
                                        </div>
                                    </div>
                                    <div className='content-1-2'>
                                        <div className='content-input-2'>
                                            <input
                                                type='text'
                                                className='new-addr-input-2'
                                                name='contact'
                                                value={addr.contact}
                                                onChange={(e) => handleInputs(e)}
                                                placeholder='*Contact Number'
                                                required />
                                        </div>
                                    </div>
                                </div>

                                <div className='new-con-head'>
                                    Address Details
                                </div>
                                <div className='content-2-1'>
                                    <div className='content-input-2'>
                                        <input
                                            type='text'
                                            className='new-addr-input-2'
                                            name='address1'
                                            value={addr.address1}
                                            onChange={(e) => handleInputs(e)}
                                            placeholder='*House/Flat no/Building/Apartment'
                                            required
                                            maxLength={40} />
                                    </div>

                                    <div className='content-input-2'>
                                        <input
                                            type='text'
                                            className='new-addr-input-2'
                                            value={addr.address2}
                                            name='address2'
                                            onChange={(e) => handleInputs(e)}
                                            placeholder='*Street/Locality'
                                            required
                                            maxLength={40} />
                                    </div>

                                    <div className='content-input-2'>
                                        <input
                                            type='text'
                                            className='new-addr-input-2'
                                            name='address3'
                                            value={addr.address3}
                                            onChange={(e) => handleInputs(e)}
                                            placeholder='Landmark(Optional)'
                                            maxLength={40} />
                                    </div>
                                    <div className='content-2-1-2'>
                                        <div className='content-input-1'>
                                            <input
                                                type='text'
                                                className='new-addr-input-1'
                                                name='pincode'
                                                value={addr.pincode}
                                                onChange={(e) => handleInputs(e)}
                                                placeholder='*Pincode' required
                                                maxLength={40} />
                                        </div>
                                        <div className='content-input-3'>
                                            <input
                                                type='text'
                                                className='new-addr-input-1'
                                                value={addr.city}
                                                name='city'
                                                onChange={(e) => handleInputs(e)}
                                                placeholder='*City'
                                                required
                                                maxLength={40} />
                                        </div>
                                    </div>
                                </div>
                                <div className='add-new-address'>
                                    {
                                        edit?<><button className='address-btn' type='submit' >Edit</button></>
                                        :<><button className='address-btn' type='submit' >Add</button></>
                                    }
                                </div>
                            </div>
                        </div>
                    </div> </form> : <></>
            }

            {
                allAddress.length != 0 ?
                    allAddress.map((place) => {
                        return <div className={place.default ? 'default' : 'show-new-address'}>
                            <div className='new-address-name'>
                                {place.firstname} {place.lastname}
                            </div>
                            <div className='new-address-address'>
                                {place.address1} {place.address2} {place.address3} {place.city} {place.pincode}
                            </div>
                            <div className='new-address-phone'>
                                <span style={{
                                    fontFamily: 'Roboto Condensed',
                                    fontWeight: 'bold'
                                }}>Phone :</span>  <span style={{
                                    fontWeight: 'bold'
                                }}>{place.contact}</span>
                            </div>
                            <div className='new-address-btns'>
                                {/* <div className='new-labels' onClick={() => handleEdit(place)}>Edit</div> */}
                                <div className='new-labels' onClick={() => handleDelete(place)}>Delete</div>
                                <div className={activeID == place._id ? 'new-label-active' : 'new-labels'} onClick={() => handleActive(place)}>
                                        {
                                            activeID==place._id?<>Default Address</>:<>Set As Default Address</>
                                        }
                                </div>
                            </div>
                        </div>
                    })
                    : <></>
            }
        </div>
    )
}

export default Address