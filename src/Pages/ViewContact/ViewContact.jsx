import React from 'react'
import { Navbar } from '../../Components'
import './ViewContact.css'
import ViewCard from './Components/ViewCard'

const ViewContact = () => {
  return (
    <div>
      <Navbar />
      <div className="view-page">
        <div className="view-content">
          <div className="head">
            <h1>Contact Details</h1>
          </div>
          <ViewCard />
        </div>
      </div>
    </div>
  )
}

export default ViewContact
