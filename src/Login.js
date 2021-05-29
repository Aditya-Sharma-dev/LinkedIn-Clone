import React from 'react'
import './Login.css'
function Login() {
    const logintoApp = () => {

    };
    const register = () => {

    };
    return (
        <div className='login'>
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-768x480.png" alt="OK" />
        
        <form>
            <input placeholder='Full name (REQUIRED IF REGISTERING)' type="text" />
            <input placeholder='Profile Phoro URL' type="text" />
            <input placeholder='Email' type="email" />
            <input placeholder='Password' type="password" />
            <button type='submit' onClick={logintoApp} >SIGN IN</button>
        </form>
        <p>Not a member?{" "}
            <span className='login_register' onClick={register}>Register Now</span>
        </p>
        </div>
    )
}

export default Login
