import React from 'react'
import { Navbar } from '../../Components'
import './ViewContact.css'
import ViewCard from './Components/ViewCard'
import { useLocation } from 'react-router-dom'

const ViewContact = () => {
  const location = useLocation();
  const { contact } = location.state;
  return (
    <div>
      <Navbar />
      <div className="view-page">
        <div className="view-content">
          <div className="head">
            <h1>Contact Details</h1>
          </div>
          <ViewCard data={{
            name: contact.name,
            phone: contact.phone_number,
            address: contact.address
          }} />
        </div>
      </div>
    </div>
  )
}

export default ViewContact
