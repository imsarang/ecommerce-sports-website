import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CLICK_SIGNIN } from './redux/clickingReducer'
import { USER_ADMIN, USER_CONTACT, USER_LOGIN } from './redux/userReducer'

const OTP = ({ setSeconds, setLogin, seconds, contact, login }) => {

    const [resend, setResend] = useState(true)
    // resend?setSeconds(30):setSeconds(0)
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) setSeconds(seconds - 1)
            if (seconds === 0) {
                setSeconds(0)
                setResend(false)
            }
        }, 1000)
        // console.log(resend);
        return () => { clearInterval(timer) }
    }, [seconds])

    const handleResend = () => {
        if (seconds === 0) setSeconds(30)
        setResend(true)
    }
    const handleChange = () => {
        setLogin(true)
    }

    const validateOTP = ()=>{

        
        
        dispatch(CLICK_SIGNIN())
        dispatch(USER_CONTACT({
            phone:contact
        }))
        console.log(contact);
    }
    return (

        <div style={{ padding: '10% 0 0 0' }}>
            <div style={{
                textAlign: 'center',
                fontFamily: 'Oswald'
            }}>Please enter the otp sent to
                <div>{contact}</div>
                <div onClick={handleChange} style={{
                    color: '#349beb', cursor: 'pointer'
                }}>CHANGE</div>
                <div style={{ width: '100%', padding: '5%' }}>
                    <input type='text' style={{
                        padding: '3% 5% 3% 5%'
                    }} />
                </div>

                {
                    resend ? <div>
                        <div>Resending OTP in</div>
                        <div style={{
                            padding: '3%',
                        }}>
                            {seconds}
                        </div>
                    </div> : <></>
                }

                <div>
                    <button type='button' style={{
                        padding: '3%',
                        backgroundColor: '#349beb',
                        border: 'none',
                        fontFamily: 'Bebas Neue',
                        color: 'white',
                        width: '70%'
                    }}
                    onClick={validateOTP}>
                        VALIDATE OTP
                    </button>
                </div>
                Not yet received OTP?
                <div style={{ padding: '3%', color: '#349beb' }}
                    onClick={handleResend}>
                    Resend OTP
                </div>
            </div>
        </div>
    )
}

export default OTP