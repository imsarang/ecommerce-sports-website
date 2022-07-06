import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import InfoModal from '../Info/InfoModal'
import Loading from '../Loading'
import { phone, username } from '../redux/userReducer'
import '../styles/profile.css'
const Profile = ({ load,setLoad,firstname, lastname, username, email, contact, gender, showUserFromDatabase, setMale, info, setInfo, male }) => {


    const [styleMale, setClassMale] = useState('gender-2')
    const [styleFemale, setClassFemale] = useState('gender-2')
    const [seconds, setSeconds] = useState()
    const [show, setShow] = useState(false)

    useEffect(() => {
        showUserFromDatabase()
        // male=='Male'?setClassMale('gender-1'):setClassMale('gender-2')
        // male=='Female'?setClassFemale('gender-1'):setClassFemale('gender-2')
        // console.log(gender);
        
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(info);
        setSeconds(2)
        // setLoad(true)

        try {
            const result = await fetch(`/api/v1/update/${username}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    phone: contact,
                    gender: gender
                })
            })

            if (result) setShow(true)
            else { console.log('Error in updating') }
        } catch (e) {
            console.log(e);
        }
        // setLoad(false)
    }

    const handleInputs = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
        // console.log(info);
    }

    const handleMale = () => {
        setMale('Male')
        setClassMale('gender-1')
        setClassFemale('gender-2')
    }
    const handleFemale = () => {
        setMale('Female')
        setClassMale('gender-2')
        setClassFemale('gender-1')
    }

    if(!load) return <Loading/>

    return (
        <div className='profile'>
            <form onSubmit={handleSubmit}>
                <div className='personal'>Personal Information</div>
                <div className='profile-contents'>
                    <div className='profile-1'>
                        <div className='profile-cat'>
                            First Name
                            <div className='profile-input-div'>
                                <input
                                    type='text'
                                    name='firstname'
                                    value={firstname}
                                    onChange={(e) => handleInputs(e)}
                                    className='profile-input'
                                    placeholder='Firstname' />
                            </div>
                        </div>

                        <div className='profile-cat'>
                            Mobile Number
                            <div className='profile-input-div'>
                                <input
                                    type='text'
                                    value={contact}
                                    // name='contact'
                                    // onChange={(e)=>handleInputs(e.target.value)}
                                    className='profile-input'
                                    placeholder='Mobile Number' />
                            </div>
                        </div>

                        <div className='profile-first'>
                            Gender
                            <div className='profile-input-div'>
                                <label className={styleMale} onClick={handleMale}>Male</label>
                                <label className={styleFemale} onClick={handleFemale}>Female</label>
                            </div>
                        </div>

                    </div>
                    <div className='profile-2'>
                        <div className='profile-first'>
                            Last Name
                            <div className='profile-input-div'>
                                <input
                                    type='text'
                                    name='lastname'
                                    value={lastname}
                                    onChange={(e) => handleInputs(e)}
                                    className='profile-input'
                                    placeholder='Lastname' />
                            </div>
                        </div>

                        <div className='profile-first'>
                            Email
                            <div className='profile-input-div'>
                                <input
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => handleInputs(e)}
                                    className='profile-input'
                                    placeholder='Email' />
                            </div>
                        </div>

                    </div>

                </div>
                <div className='update'>
                    <button type='submit'
                        className='submit-update'>Update</button>
                </div>
            </form>
            {
                show ? <InfoModal text={'Profile Updated'} seconds={seconds} setSeconds={setSeconds} setShow={setShow} /> : <></>
            }
        </div>
    )
}

export default Profile