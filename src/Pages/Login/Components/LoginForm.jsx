import React, { useState } from 'react'
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  var [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate();
  const handleChangeLogin = () => {
    setIsLogin(!isLogin)

  }

  const handleSubmit = () => {
    console.log('Submitted')
    navigate('/home');
  }

  if (isLogin) {
    // This is login form
    return (
      <div className='login-form'>
        <h1>Login</h1>
        <div className='email'>
          <h2>Email</h2>
          <input className='text-input' type='email' placeholder='Enter your Email' />
        </div>
        <div className='password '>
          <h2>Password</h2>
          <input className='text-input' type='password' placeholder='Enter your Password' />
        </div>
        <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
        <button className='signup' onClick={handleChangeLogin}>
          Create  Account
        </button>
      </div>
    )
  }
  else {
    return (
      // This is register form
      <div className='login-form'>
        <h1>Sign Up</h1>
        <div className='email'>
          <p>Email</p>
          <input className='text-input' type='email' placeholder='Enter your Email' />
        </div>
        <div className='password '>
          <p>Name</p>
          <input className='text-input' type='name' placeholder='Enter your Name' />
        </div>
        <div className='password '>
          <p>Password</p>
          <input className='text-input' type='password' placeholder='Enter your Password' />
        </div>
        <div className='password '>
          <p>Confirm Password</p>
          <input className='text-input' type='password' placeholder='Confirm your Password' />
        </div>
        <button className='submit' type='submit' onClick={handleSubmit}>Submit</button>
        <button className='signup' onClick={handleChangeLogin}>
          Login
        </button>
      </div>
    )
  }
}

export default LoginForm