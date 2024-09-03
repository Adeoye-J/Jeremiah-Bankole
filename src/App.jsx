import React from "react"
import NavBar from './containers/NavBar/NavBar'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home/Home"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./containers/Footer/Footer"
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
