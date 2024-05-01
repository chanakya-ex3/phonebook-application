import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AddCard.css'

const AddCard = () => {
  const navigate = useNavigate()
  const handleAdd = () => {
    navigate('/home')
  }
  
  return (
    <div className='addcard'>
      <div className="add-form">
        <div className="form1">
          <div className="name">
            <h2>Name *</h2>
            <input className='add-input' type="text" placeholder='Enter your Name' />
          </div>
          <div className="phone">
            <h2>Phone Number *</h2>
            <input className='add-input' type="text" placeholder='Enter your Phone Number' />
          </div>
        </div>
        <div className="form2">
          <h2>Address</h2>
          <textarea className='add-input bbox' type='text' placeholder='Enter your Address' cols="30" rows="10"></textarea>
        </div>
        <button type='button' className='add-button' onClick={handleAdd} >Add</button>
      </div>
    </div>
  )
}

export default AddCard
