import React,{useState} from 'react'
import './LoginForm.css';

const LoginForm = () => {
  var [isLogin, setIsLogin] = useState(true)
  const handleChangeLogin = () =>{
    setIsLogin(!isLogin)
  
  }
 if(isLogin){
  return (
    <div className='login-form'>
      <h1>Login</h1>
      <div className='email'>
        <p>Email</p>
        <input type='email' placeholder='Enter your Email' />
      </div>
      <div className='password '>
        <p>Password</p>
        <input type='password' placeholder='Enter your Password' />
      </div>
      <button className='submit' type='submit'>Submit</button>
      <button className='signup' onClick={handleChangeLogin}>
      Sign Up
    </button>
    </div>
  )
 }
 else{
  return (
    <div className='login-form'>
      <h1>Sign Up</h1>
      <div className='email'>
        <p>Email</p>
        <input type='email' placeholder='Enter your Email' />
      </div>
      <div className='password '>
        <p>Name</p>
        <input type='name' placeholder='Enter your Name' />
      </div>
      <div className='password '>
        <p>Password</p>
        <input type='password' placeholder='Enter your Password' />
      </div>
      <div className='password '>
        <p>Confirm Password</p>
        <input type='password' placeholder='Confirm your Password' />
      </div>
      <button className='submit' type='submit'>Submit</button>
      <button className='signup' onClick={handleChangeLogin}>
      Login
    </button>
    </div>
  )
 }
}

export default LoginForm