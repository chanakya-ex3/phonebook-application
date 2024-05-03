import React from 'react'
import { Route, Navigate, Routes, BrowserRouter as Router } from 'react-router-dom'
import { LoginPage, HomePage, AddContact, ViewContact } from './Pages/';
import './App.css';

const App = () => {
  const token = window.localStorage.getItem('token');
  console.log(token)
  if (!token) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    )
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/view" element={<ViewContact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App