import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './pages/Navbar'
// import Menu from './pages/Menu'
// import Contact from './pages/Contact'

export default function AppRoutes(){
  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />  
      {/* <Route path="/menu" element={<Menu/>} />
      <Route path="/contact" element={<Contact/>} />  */}
    </Routes>

    </>
  )
}
