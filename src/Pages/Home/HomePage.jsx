import React, {useState, useEffect} from 'react'
import './HomePage.css'
import { Navbar } from '../../Components'
import { useNavigate, Link, json } from 'react-router-dom'

const HomePage = () => {
  const user_metadata = localStorage.getItem('user_metadata')
  const id = JSON.parse(user_metadata)["sub"]
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [data,setData]=useState([]);
  useEffect(()=>{
   fetch(`https://mfpwxvanolojwoflxwvo.supabase.co/rest/v1/contacts?select=*&user_id=eq.${id}`,{
    method: 'GET',
    headers:{
      apiKey: process.env.REACT_APP_API_KEY,
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
   }).then((response) => response.json()).
    then((data) => {
      setData(data)
      setIsDataLoaded(true)
    })
    
  })

  const navigate = useNavigate()
  const handleAddContact = () => {
    console.log('Add Contact')
    navigate('/add')
  }
  const handleViewContact = (item) => {
    console.log("View")
    navigate('/view', {state: { contact: item }})
  }
  return (
    <div>
      <Navbar />
      {isDataLoaded ? (
        data.length === 0 ? (
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
              {data.map((item) => (
                <div className='contact' key={item}>
                  <button className='contact-link' onClick={()=>handleViewContact(item)}>{item.name}</button>
                </div>
              ))}
            </div>
          </div>


        </div>
      )
      ):(
        <h1>Loading...</h1>

      )}

    </div>
  )
}

export default HomePage
