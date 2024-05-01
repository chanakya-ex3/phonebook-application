import React from 'react'
import './AddContact.css'
import { Navbar } from '../../Components'
import AddCard from './Components/AddCard'

const AddContact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="add-page">
                <div className='add'>
                    <div className="head">
                        <h1 className='title'>Add Contact</h1>
                    </div>
                    <AddCard />
                </div>
            </div>
        </div>
    )
}

export default AddContact
