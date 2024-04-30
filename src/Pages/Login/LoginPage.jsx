import React from 'react'
import './LoginPage.css';
import LoginForm from './Components/LoginForm'

const LoginPage = () => {
  return (
    <div className='login-page'>
    <h1>PhoneBook</h1>
    <LoginForm />
    </div>
  )
}

export default LoginPage