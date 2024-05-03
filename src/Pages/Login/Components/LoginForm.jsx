import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleChangeLogin = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = () => {
    console.log('email', email)
    console.log('password', password)
    if (!isLogin) {
      console.log('name', name)
      console.log('confirmPassword', confirmPassword)
    }
    if (isFormValid()) {
      navigate('/home');
    }

  };

  const isFormValid = () => {
    // form validation username should be valid email and password should be above 6 characters
    if (!email || !password) {
      alert('Please enter email and password');
      return false;
    }
    if (!isLogin && password !== confirmPassword) {
      alert('Password and Confirm Password should be same');
      return false;
    }
    if (!isLogin && name === '') {
      alert('Please enter name');
      return false;
    }
    if (password.length < 6) {
      alert('Password should be atleast 6 characters');
      return false;
    }
    if (!validateEmail(email)) {
      alert('Please enter valid email');
      return false;
    }
    return true;
  }
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <div className='login-form'>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <div className='email'>
        <p>Email</p>
        <input
          className='text-input'
          type='email'
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {!isLogin && (
        <div className='name'>
          <p>Name</p>
          <input
            className='text-input'
            type='text'
            placeholder='Enter your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}
      <div className='password'>
        <p>Password</p>
        <input
          className='text-input'
          type='password'
          placeholder='Enter your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {!isLogin && (
        <div className='password'>
          <p>Confirm Password</p>
          <input
            className='text-input'
            type='password'
            placeholder='Confirm your Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      )}
      <button className='submit' type='submit' onClick={handleSubmit}>
        Submit
      </button>
      <button className='signup' onClick={handleChangeLogin}>
        {isLogin ? 'Create Account' : 'Login'}
      </button>
    </div>
  );
};

export default LoginForm;
