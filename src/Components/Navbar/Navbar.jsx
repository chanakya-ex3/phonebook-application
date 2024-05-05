import React from 'react'
import './Navbar.css';

const Navbar = () => {
  function extractNameFromEmail(email) {
    const parts = email.split('@');
  
    if (parts.length !== 2) {
      return null;
    }
    const localPart = parts[0];
    const cleanedName = localPart.replace(/[\._-]/g, ' ');
    const capitalizedName = cleanedName
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return capitalizedName;
  }
  const user_metadata = localStorage.getItem('user_metadata')
  const name = extractNameFromEmail(JSON.parse(user_metadata)["email"]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const logout = async () => {
    await fetch(`https://mfpwxvanolojwoflxwvo.supabase.co/auth/v1/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': API_KEY,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: localStorage.getItem('user'),
    })
    localStorage.removeItem('token');
    localStorage.removeItem('user_metadata');
    localStorage.removeItem('user');
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