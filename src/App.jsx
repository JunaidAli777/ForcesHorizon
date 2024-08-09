import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Register from './components/Register'
import Footer from './components/Footer';
import Login from './components/Login';
import './components/styles/Header.css'

const App = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  return (
  <Router>
    <Header isButtonActive={isButtonActive}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register isButtonActive={isButtonActive} setIsButtonActive={setIsButtonActive} />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
   </Router>
  )
}

export default App