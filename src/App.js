import React from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import { LoginPage, HomePage, AddContact, ViewContact } from './Pages/';
import './App.css';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element= {<LoginPage /> }/>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/view" element={<ViewContact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App