import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import OTP from './OTP'
import { CLICK_SIGNIN } from './redux/clickingReducer'
import { phone, USER_ADMIN, USER_CONTACT, USER_LOGIN, USER_USERNAME } from './redux/userReducer'
import './styles/general.css'
import { GoogleLogin } from 'react-google-login'
import { setLocal } from './storeInLocalStorage'

const SignUp = () => {

    const mystyle1 = {
        borderBottom: '3px solid #349beb',
        width: '100%',
        cursor: 'pointer'
    }

    const mystyle2 = {
        borderBottom: '0.1px solid grey',
        width: '100%',
        cursor: 'pointer',
    }
    const mystyle3 = {
        padding: '3%',
        width: '100%',
        border: 'none',
        backgroundColor: '#e8e9eb',
        fontFamily: 'Roboto Condensed',
        borderRadius: '5px'
    }
    const mystyle4 = {
        padding: '0 0 1% 0'
    }
    const [login, setLogin] = useState(true)
    const [x, setPhone] = useState('')
    const [otp, setOTP] = useState(false)
    const [signup, setSignup] = useState(false)

    const navigate = useNavigate()
    const [seconds, setSeconds] = useState(30)

    const dispatch = useDispatch()
    const [style, setStyle] = useState(true)
    const [userInfo, setInfo] = useState({
        email: '',
        phoneNumber: '',
        username: '',
        password: '',
        cpassword: ''
    })
    const [userLogin, setUser] = useState({
        username: '',
        password: ''
    })
    const handleLoginNormal = async () => {
        try {
            const user = await fetch('/api/v1/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify({
                    username: userLogin.username,
                    password: userLogin.password
                })
            })
            if (user) {
                const actual = await user.json()
                if (actual.success) {
                    actual.user.isAdmin ? dispatch(USER_ADMIN()) : dispatch(USER_LOGIN())
                    // dispatch(USER_LOGIN())
                    dispatch(USER_USERNAME({
                        username: actual.user.username
                    }))
                    dispatch(CLICK_SIGNIN({}))
                }
                setLocal(actual)
                console.log(actual);
            }
        } catch (e) {
            console.log(e);
        }
    }
    const handleLoginOTP = () => {
        setOTP(true)
        setLogin(false)
        setSignup(false)
        setSeconds(30)
    }

    const handleLogin = () => {
        setLogin(true)
        setSignup(false)
        setStyle(true)
        setOTP(false)
        dispatch(USER_CONTACT({
            phone: null
        }))
    }

    const handleSignup = () => {
        setLogin(false)
        setSignup(true)
        setStyle(false)
        setOTP(false)
        dispatch(USER_CONTACT({
            phone: null
        }))
    }
    const handleRegister = async () => {
        if (userInfo.cpassword === userInfo.password) {
            try {
                const user = await fetch('api/v1/add', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: userInfo.username,
                        phone: userInfo.phoneNumber,
                        email: userInfo.email,
                        password: userInfo.password,
                    })
                })

                if (user) {
                    const actual = await user.json()
                    console.log(actual);
                    if (actual.success) {
                        dispatch(USER_LOGIN())
                        alert('Registration Successfull! Please Login to your account')
                        setLogin(true)
                    }
                }

            } catch (e) { console.log(e); }
        }
        else {
            alert(`passwords donot match`)
        }

    }

    const handleLoginUser = (e) => {
        setUser({ ...userLogin, [e.target.name]: e.target.value })
    }
    const handleUserInput = (e) => {
        setInfo({ ...userInfo, [e.target.name]: e.target.value })
    }
    const handleInput = (value) => {
        setPhone(value)

    }
    const responseSuccessGoogle = (response) => {
        console.log(response);
    }
    const responseErrorGoogle = () => {

    }
    const handleClose = () => dispatch(CLICK_SIGNIN())
    return (
        <div style={{
            backgroundColor:'rgba(0,0,0,0.5)'

        }}>
            <div className='sign' style={{
                top: '15%',
                height: '88%',
            }}>
                <div className='sign-close'
                    style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}>
                    <FaPlus
                        style={{
                            transform: 'rotate(45deg)',
                            fontSize: '25px',
                            margin: '1.5% 1.5% 0 0',
                            cursor: 'pointer',
                            color: 'grey'
                        }}
                        onClick={handleClose} />
                </div>
                <div className='signup' style={{

                    display: 'flex',
                    width: '100%',
                    height: '90%',
                    padding: '5%'
                }}>

                    <div className='modal-content-1'
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#e8e9eb',
                        }}>
                        {
                            login ? <div>
                                <div style={{
                                    padding: '5%',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '30px'
                                }}>
                                    Login
                                </div>
                                <div style={{
                                    padding: '5%',
                                    fontFamily: 'Oswald',
                                    fontSize: '25px'
                                }}>
                                    <div>Get</div>
                                    <div>access to</div>
                                    <div>personalised</div>
                                    <div>shopping experience</div>
                                </div>
                            </div> : <div>
                                <div style={{
                                    padding: '5%',
                                    fontFamily: 'Bebas Neue',
                                    fontSize: '30px'
                                }}>
                                    sign up
                                </div>
                                <div style={{
                                    padding: '5%',
                                    fontFamily: 'Oswald',
                                    fontSize: '25px'
                                }}>
                                    <div>We</div>
                                    <div>promise you</div>
                                    <div style={{
                                        color: '#349beb'
                                    }}>100% secure</div>
                                    <div>data protection</div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='modal-content-2'
                        style={{
                            width: '100%',
                            padding: '1% 4% 0 4%'
                        }}>
                        <div style={{
                            display: 'flex',
                            width: '100%',
                            textAlign: 'center',
                            fontFamily: 'Bebas Neue',
                            fontSize: '20px'
                        }}>
                            {
                                otp ? <>
                                </> : <>
                                    <div onClick={handleLogin}
                                        style={style ? mystyle1 : mystyle2}
                                    >Login</div>
                                    <div onClick={handleSignup}
                                        style={style ? mystyle2 : mystyle1}>Signup</div>
                                </>
                            }

                        </div>
                        <div style={{

                        }}>
                            {
                                login ? <>
                                    <div style={{
                                        padding: '10% 0 0 0'
                                    }}>
                                        <input
                                            type='text'
                                            style={{
                                                padding: '3%',
                                                width: '100%',
                                                border: 'none',
                                                backgroundColor: '#e8e9eb',
                                                fontFamily: 'Roboto Condensed',
                                                borderRadius: '5px'
                                            }}
                                            placeholder='Username'
                                            name='username'
                                            value={userLogin.username}
                                            onChange={(e) => handleLoginUser(e)} />
                                    </div>
                                    <div style={{
                                        padding: '1% 0 0 0'
                                    }}>
                                        <input
                                            type='password'
                                            style={{
                                                padding: '3%',
                                                width: '100%',
                                                border: 'none',
                                                backgroundColor: '#e8e9eb',
                                                fontFamily: 'Roboto Condensed',
                                                borderRadius: '5px'
                                            }}
                                            placeholder='Password'
                                            name='password'
                                            value={userLogin.password}
                                            onChange={(e) => handleLoginUser(e)} />
                                    </div>
                                    <div style={{
                                        padding: '5% 0 0 0'
                                    }}>
                                        <button style={{
                                            width: '100%',
                                            border: 'none',
                                            padding: '4% 2% 4% 2%',
                                            fontFamily: 'Oswald',
                                            backgroundColor: '#349beb',
                                            color: 'white',
                                            borderRadius: '5px'
                                        }}
                                            onClick={handleLoginNormal}>LOGIN </button>
                                    </div>
                                    <div style={{ fontFamily: 'Oswald', textAlign: 'center' }}>OR</div>
                                    <div style={{
                                        padding: '1% 0 0 0'
                                    }}>
                                        <input
                                            type='text'
                                            style={{
                                                padding: '3%',
                                                width: '100%',
                                                border: 'none',
                                                backgroundColor: '#e8e9eb',
                                                fontFamily: 'Roboto Condensed',
                                                borderRadius: '5px'
                                            }}
                                            placeholder='Enter your contact number'
                                            value={x}
                                            onChange={(e) => handleInput(e.target.value)} />
                                    </div>
                                    <div style={{
                                        padding: '5% 0 0 0'
                                    }}>
                                        <button style={{
                                            width: '100%',
                                            border: 'none',
                                            padding: '4% 2% 4% 2%',
                                            fontFamily: 'Oswald',
                                            backgroundColor: '#349beb',
                                            color: 'white',
                                            borderRadius: '5px'
                                        }}
                                            onClick={handleLoginOTP}>LOGIN VIA OTP</button>
                                    </div>

                                    <div style={{ fontFamily: 'Oswald', textAlign: 'center', padding: '1% 0 0 0' }}>OR</div>
                                    
                                    <GoogleLogin
                                        clientId='64048467833-inmpfaa9bqbh9p1duue1adh7eln5ki0a.apps.googleusercontent.com'
                                        buttonText="Login with Google"
                                        onSuccess={responseSuccessGoogle}
                                        onFailure={responseErrorGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        style={{
                                            width: '100px'
                                        }}
                                    />
                                    <div style={{
                                        textAlign: 'center',
                                        fontFamily: 'Oswald',
                                        padding: '5% 0 5% 0'
                                    }}>
                                        NEW TO BRAND?
                                    </div>
                                    <div>
                                        <button
                                            type='button'
                                            style={{
                                                width: '100%',
                                                padding: '4%',
                                                border: 'none',
                                                fontFamily: 'Oswald'
                                            }}
                                            onClick={handleSignup}>
                                            Create an account
                                        </button>
                                    </div>
                                </> : signup ? <>
                                    <div style={{
                                        padding: '10% 0 0 0'
                                    }}>
                                        <div style={mystyle4}>
                                            <input
                                                style={mystyle3}
                                                type='email'
                                                placeholder='Enter your email'
                                                name='email'
                                                value={userInfo.email}
                                                onChange={(e) => handleUserInput(e)}
                                            />
                                        </div>

                                        <div style={mystyle4}>
                                            <input
                                                style={mystyle3}
                                                type='text'
                                                placeholder='Enter your username'
                                                name='username'
                                                value={userInfo.username}
                                                onChange={(e) => handleUserInput(e)}
                                            />
                                        </div>
                                        <div style={mystyle4}>
                                            <input
                                                style={mystyle3}
                                                type='phone'
                                                placeholder='Enter your phone number'
                                                name='phoneNumber'
                                                value={userInfo.phoneNumber}
                                                onChange={(e) => handleUserInput(e)}
                                            />
                                        </div>
                                        <div style={mystyle4}>
                                            <input
                                                style={mystyle3}
                                                type='password'
                                                placeholder='Enter password'
                                                name='password'
                                                value={userInfo.password}
                                                onChange={(e) => handleUserInput(e)}
                                            />
                                        </div>
                                        <div style={mystyle4}>
                                            <input
                                                style={mystyle3}
                                                type='password'
                                                placeholder='Confirm Password'
                                                name='cpassword'
                                                value={userInfo.cpassword}
                                                onChange={(e) => handleUserInput(e)}
                                            />
                                        </div>

                                    </div>
                                    <div style={{
                                        padding: '5% 0 0 0'
                                    }}>
                                        <button type='button'
                                            style={{
                                                width: '100%',
                                                border: 'none',
                                                padding: '4% 2% 4% 2%',
                                                fontFamily: 'Oswald',
                                                backgroundColor: '#349beb',
                                                color: 'white',
                                                borderRadius: '5px'
                                            }}
                                            onClick={handleRegister}>Register</button>
                                    </div>

                                    <div style={{
                                        padding: '10% 0 0 0',
                                        textAlign: 'center',
                                        fontFamily: 'Oswald',
                                        fontSize: '15px'
                                    }}>
                                        ALREADY HAVE AN ACCOUNT?
                                        <span onClick={handleLogin} style={{
                                            color: "#349beb",
                                            padding: '0 0 0 4%',
                                            cursor: 'pointer'
                                        }}>LOGIN</span>
                                    </div>
                                </> : otp ? <div>
                                    <OTP
                                        setLogin={setLogin}
                                        contact={x}
                                        seconds={seconds}
                                        setSeconds={setSeconds}
                                        login={login} />
                                </div> : <></>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp