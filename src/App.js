import React from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import {Navbar} from './Components';
import { LoginPage } from './Pages/';
import './App.css';

const App = () => {
  return (
    <>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element= {<LoginPage /> }/>
        <Route path="/about" element={<div>About</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
    </>
  )
}

export default App