import React from 'react'
import './Navbar.css';

const Navbar = () => {
  const name = 'JohnDoe'
  const API_KEY = process.env.REACT_APP_API_KEY;
  const logout = async () => {
    await fetch(`https://mfpwxvanolojwoflxwvo.supabase.co/auth/v1/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': API_KEY,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        email: "xeyiki8899@buzblox.com",
        password: "newword123"
      }),
    })
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <>
      <div className="navbar">
      <div className="uname">
        {name}
      </div>
      <button className='logout' onClick={logout}>Logout</button>
      </div>
    </>
  )
}

export default Navbar