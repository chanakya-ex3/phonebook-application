import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddCard.css'

const AddCard = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleAdd = () => {
    if (validateAddForm()) {
      setErrorMessage('')
      navigate('/home')
    }
  }

  const validateAddForm = () => {
    if (!name) {
      setErrorMessage('Please enter Name')
      return false
    }
    if (!phoneNumber) {
      setErrorMessage('Please enter Phone Number')
      return false
    }
    // phone number should be digits only
    if (!/^\d+$/.test(phoneNumber)) {
      setErrorMessage('Phone Number should be digits only')
      return false
    }
    if (phoneNumber.length < 10) {
      setErrorMessage('Phone Number should be atleast 10 digits')
      return false
    }
    if (address === '') {
      setErrorMessage('Please enter Address')
      return false
    }

    return true
  }

  return (
    <div className='addcard'>
      <div className="add-form">
        <div className="form1">
          <div className="name">
            <h2>Name *</h2>
            <input className='add-input' type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="phone">
            <h2>Phone Number *</h2>
            <input className='add-input' type="text" placeholder='Enter your Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
        </div>
        <div className="form2">
          <h2>Address</h2>
          <textarea className='add-input bbox' type='text' placeholder='Enter your Address' cols="30" rows="10" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
        </div>
        <p className='error-show'>{errorMessage}</p>
        <button type='button' className='add-button' onClick={handleAdd} >Add</button>
      </div>
    </div>
  )
}

export default AddCard
