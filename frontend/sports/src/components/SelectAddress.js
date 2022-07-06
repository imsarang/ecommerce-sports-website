import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { CLICK_CHANGE_ADDRESS, CLICK_SIGNIN, PINCODE } from './redux/clickingReducer'
import { login, username } from './redux/userReducer'
import './styles/general.css'

const SelectAddress = () => {

    const dispatch = useDispatch()
    const user_name = useSelector(username)
    const loggedIN = useSelector(login)

    const handleClose = () => {
        dispatch(CLICK_CHANGE_ADDRESS({}))
    }
    const [addressValue, setAddress] = useState()
    const [activeAddr, setActiveAddress] = useState({})
    const handleInput = (e) => {
        setAddress(e)

    }
    const handleLogin = () => {
        dispatch(CLICK_SIGNIN({}))
        dispatch(CLICK_CHANGE_ADDRESS({}))
    }
    const digit = (num, count = 0) => {
        if (num) {
            return digit(Math.floor(num / 10), ++count);
        };
        return count;
    }
    const handleApply = () => {
        if (!isNaN(addressValue) && digit(addressValue) == 6) {
            dispatch(PINCODE({
                pincode: addressValue
            }))
            dispatch(CLICK_CHANGE_ADDRESS())
        } else alert(`Invalid Pincode`)
    }
    const showActiveAddress = async () => {
        const result = await fetch(`api/v1/show/${user_name}`, {
            method: "GET"
        })
        const user = await result.json()
        if (user.success)
            setActiveAddress(user.user.active)
    }
    useEffect(() => {
        showActiveAddress()
    }, [])
    return (
        <div className='changeAddress'>
            <div className='modal-close'
                style={{
                    display: 'flex',
                    justifyContent: 'end',
                    fontSize: '25px',
                    margin: '1.5% 1.5% 0 0',
                }}>
                <FaPlus style={{
                    transform: 'rotate(45deg)',
                    cursor: 'pointer'
                }}
                    onClick={handleClose} />
            </div>
            <div style={{
                display: 'flex',
                padding: '2%'
            }}>
                <div className='modal-addr-1'
                    style={{
                        width: '100%',
                        height: '100%',
                        fontFamily: 'Oswald',
                        backgroundColor: '#e8e9eb'
                    }}>
                    <div style={{
                        padding: "5%",
                        fontSize: '30px'
                    }}>LOCATION</div>
                    <div style={{
                        padding: '0 5% 80% 5%',
                        fontSize: '20px'
                    }}>
                        Select your Location/Address
                    </div>
                </div>
                <div className='modal-addr-2'
                    style={{
                        width: '100%',
                        padding: '0 3% 3% 3%'
                    }}>
                    {
                        loggedIN ? <>
                        <div >
                            <div style={{fontFamily:'Bebas Neue'}}>Delivery To</div>
                            <div className='defualt' style={{fontFamily:"Oswald",backgroundColor:'#e8e9eb',padding:'1% 1% 1% 2%',borderRadius:'5px'}}>
                            <div className='new-address-name'>{console.log(activeAddr)}
                                {activeAddr.firstname} {activeAddr.lastname}
                            </div>
                            <div className='new-address-address'>
                                {activeAddr.address1} {activeAddr.address2} {activeAddr.address3} {activeAddr.city} {activeAddr.pincode}
                            </div>
                            <div className='new-address-phone'>
                                <span style={{
                                    fontFamily: 'Roboto Condensed',
                                    fontWeight: 'bold'
                                }}>Phone :</span>  <span style={{
                                    fontWeight: 'bold'
                                }}>{activeAddr.contact}</span>
                            </div>
                        </div>
                        </div>
                        </> : <>
                            <div style={{
                                fontFamily: 'Oswald',
                                padding: '0 0 3% 0'
                            }}>Select Address</div>
                            <div style={{
                                backgroundColor: '#e8e9eb',
                                fontFamily: 'Roboto Condensed',
                                fontSize: '15px',
                                padding: '5%'
                            }}>
                                <div>
                                    Login to view your saved delivery address
                                </div>
                                <div style={{
                                    padding: '5% 0 0 0'
                                }}>
                                    <button style={{
                                        width: '100%',
                                        padding: '3%',
                                        border: 'none',
                                        backgroundColor: '#349beb',
                                        color: 'white',
                                        fontFamily: 'Oswald'
                                    }}
                                        onClick={handleLogin}>
                                        LOGIN
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                    <div style={{
                        textAlign: 'center',
                        fontFamily: 'Oswald',
                        padding: '5% 0 5% 0',
                        color: 'grey',
                        fontSize: '15px'
                    }}>OR
                    </div>
                    <div>
                        <div style={{
                            fontFamily: 'Oswald',
                            padding: "0 0 3% 0 "
                        }}>PINCODE</div>
                        <div style={{
                            backgroundColor: '#e8e9eb',
                            padding: "5%"
                        }}>
                            <div style={{
                                fontFamily: 'Roboto Condensed',
                                fontSize: "15px",
                                padding: '0 0 1% 0'
                            }}>Enter a pincode</div>
                            <div style={{
                                display: 'flex',
                                padding: '2% 0 0 0'
                            }}>
                                <div style={{
                                    width: '100%',
                                    padding: '0 5% 0 0'
                                }}>
                                    <input
                                        type='texts'
                                        placeholder='Pincode'
                                        value={addressValue}
                                        onChange={(e) => handleInput(e.target.value)}
                                        style={{
                                            padding: '5%',
                                            width: '100%',
                                            fontFamily: 'Oswald'
                                        }} />
                                </div>
                                <div style={{
                                    width: '100%'
                                }}><button style={{
                                    width: '100%',
                                    padding: '5%',
                                    border: 'none',
                                    backgroundColor: '#349beb',
                                    color: 'white',
                                    fontFamily: "Oswald"
                                }}
                                    onClick={handleApply}>APPLY</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectAddress