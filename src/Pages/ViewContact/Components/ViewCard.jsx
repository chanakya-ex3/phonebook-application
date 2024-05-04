import React from 'react'
import './ViewCard.css'

const ViewCard = props => {
  const contactInfo = props.data
  return (
    <div>
      <div className='viewcard'>
        <div className="view-form">
          <div className="line1">
            <div className="name">
              <h2>Name</h2>
              <h1 className='text-data'>{contactInfo.name}</h1>
            </div>
            <div className="phone ">
              <h2>Phone Number</h2>
              <h1 className='text-data'>{contactInfo.phone}</h1>
            </div>
          </div>
          <div className="line2">
            <h2>Address</h2>
            <p className='address-box '>
             {contactInfo.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCard
