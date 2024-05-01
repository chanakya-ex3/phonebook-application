import React from 'react'
import './Navbar.css';

const Navbar = () => {
  const name = 'JohnDoe'
  return (
    <>
      <div className="navbar">
      <div className="uname">
        {name}
      </div>
      <button className='logout'>Logout</button>
      </div>
    </>
  )
}

export default Navbar