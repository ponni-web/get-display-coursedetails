import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './login.css'
const Login = () => {
    const navigate = useNavigate();
    const [loginName, setLoginName] = useState()
    const [loginPassword, setLoginPassword] = useState()
    const [showSignup, setShowSignup] = useState(false)
    const [userDetails, setUserDetails] = useState([
        { name: "test", password: "123" },
        { name: "test1", password: "123" }
    ])

    const goTohome = () => {
        let obj = userDetails.find((data) => {
            if (data.name === loginName && data.password === loginPassword) {
                return data
            }
        })
        if (obj?.name === loginName) {
            navigate("/home")
        } else {
            alert("Please Register your details")
            // setShowSignup(true)
            setLoginName('')
            setLoginPassword('')
        }
    }
    const enableSignup = () =>{
        setShowSignup(true)
    }

    const goToLogin = () => {
        setUserDetails([...userDetails, { name: loginName, password: loginPassword }])
        setShowSignup(false)
        setLoginName('')
        setLoginPassword('')
    }

    console.log(userDetails, "loginDetails")
    return (
        <div className='container'>
            {showSignup ?
                <div className='loginCard'>
                    <div className='input-align'>
                        <div>Name</div>
                        <input className='inputbox' onChange={(e) => setLoginName(e.target.value)} value={loginName} />
                    </div>
                    <div className='input-align'>
                        <div>Password</div>
                        <input className='inputbox' type='password' onChange={(e) => setLoginPassword(e.target.value)} value={loginPassword} />
                    </div>
                    <div className='input-align'>
                        <button className='btnView' onClick={goToLogin}>Sign up</button>
                    </div>
                </div> : <div className='loginCard'>
                    <div className='input-align'>
                        <div>Name</div>
                        <input className='inputbox' onChange={(e) => setLoginName(e.target.value)} value={loginName} />
                    </div>
                    <div className='input-align'>
                        <div>Password</div>
                        <input className='inputbox' type='password' onChange={(e) => setLoginPassword(e.target.value)} value={loginPassword} />
                    </div>
                    <div className='register'>
                        <p>dont you have account? click on this</p>
                        <button onClick={enableSignup}>register</button>
                    </div>
                    <div className='input-align'>
                        <button className='btnView' onClick={goTohome}>Login</button>
                    </div>
                </div>}
        </div>
    )
}

export default Login