import React from 'react'
import './HomePage.css'
import { Navbar } from '../../Components'
import { useNavigate, Link } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const handleAddContact = () => {
    console.log('Add Contact')
    navigate('/add')
  }
  const handleViewContact = () => {
    console.log("View")
    navigate('/view')
  }
  // const list = []
  const list = ['JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith', 'JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith', 'JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith', 'JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith', 'JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith', 'JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith', 'JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith', 'JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith', 'JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith', 'JohnDoe', 'JaneDoe', 'JohnSmith', 'JaneSmith']

  return (
    <div>
      <Navbar />
      {list.length === 0 ? (
        <div className="add-contacts">
          <button className="add-contacts-button" onClick={handleAddContact}>
            +
          </button>
          <h1>Add Contacts</h1>
        </div>
      ) : (
        <div className='home'>
          <button className='addContact' onClick={handleAddContact}>
            <p className='plus'>+</p>
            <p>Add Contacts</p>
          </button>
          <div className='contacts'>
            <h1>Contacts</h1>
            <div className='list scrollable-div'>
              {list.map((item) => (
                <div className='contact' key={item}>
                  <button className='contact-link' onClick={handleViewContact}>{item}</button>
                </div>
              ))}
            </div>
          </div>


        </div>
      )}

    </div>
  )
}

export default HomePage
