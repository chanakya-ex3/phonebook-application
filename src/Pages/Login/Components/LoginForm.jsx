import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY;

  const navigate = useNavigate();

  const handleChangeLogin = () => {
    setIsLogin(!isLogin);
    setErrorMessage('');
    setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');
  };


  const handleSubmit = async () => {

    if (isFormValid()) {
      try {
        if(isLogin){
           await fetch(`https://mfpwxvanolojwoflxwvo.supabase.co/auth/v1/token?grant_type=password`, {
            method: 'POST',
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
              'apikey': API_KEY
            },
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.error) {
                setErrorMessage(data.error_description);
              } else {
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('user_metadata', JSON.stringify(data.user.user_metadata));
                localStorage.setItem('user',JSON.stringify({
                  'email': email,
                  'password': password
                }))
                window.location.reload();
              }
            });
        } else{
          await fetch(`https://mfpwxvanolojwoflxwvo.supabase.co/auth/v1/signup`, {
            method: 'POST',
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              'Content-Type': 'application/json',
              'apikey': API_KEY
            },
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.error_code) {
                setErrorMessage(data.msg);
              } else {
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('user_metadata', JSON.stringify({ sub: data.id, email: data.email}));
                window.location.reload();
              }
            });
        
        }
      }
      catch (error) {
        console.error('Error:', error);
        setErrorMessage('Something went wrong');
      }
    } 

  };

  const isFormValid = () => {
    // form validation username should be valid email and password should be above 6 characters
    if (!email || !password) {
      setErrorMessage('Please enter email and password')
      return false;
    }
    if (!validateEmail(email)) {
      setErrorMessage('Please enter valid email');
      return false;
    }
    if (!isLogin && name === '') {
      setErrorMessage('Please enter name');
      return false;
    }
    if (!isLogin && password !== confirmPassword) {
      setErrorMessage('Password and Confirm Password should be same');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Password should be atleast 6 characters');
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
      <p className='error-show'>{errorMessage}</p>
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
