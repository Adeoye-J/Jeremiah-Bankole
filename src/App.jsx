import React from "react"
import NavBar from './containers/NavBar/NavBar'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact-me" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
