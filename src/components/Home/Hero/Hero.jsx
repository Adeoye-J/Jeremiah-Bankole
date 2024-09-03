import React from 'react'
import "./hero.css"
import { Link } from 'react-router-dom'
import {FaGithub, FaWhatsapp, FaTwitter, FaLinkedin, FaEnvelope} from "react-icons/fa"

const Hero = () => {
  return (
    <div className='hero-container flex'>
        <div className="hero-content flex">
          <span>Keeping it simple!</span>
          <div className="text-section flex">

            <div className="basic-info flex">
              <h3>Hello, I'm</h3>
              <h1>Jeremiah A. Bankole</h1>
              <h4>Web Developer</h4>
            </div>

            <div className="action flex">
              <h2>Interested in my projects right away?</h2>
              <Link to={"/projects"}><button>Explore Them Here...</button></Link>
            </div>

            <div className="contact-link flex">
              <div className="icon-con">
                <Link target='_blank' to={"https://github.com/Adeoye-J"}><FaGithub className='icon' /></Link>
              </div>
              <div className="icon-con">
                <Link target='_blank' to={"https://x.com/bankolejeremia6"}><FaTwitter className='icon' /></Link>
              </div>
              <div className="icon-con">
                <FaLinkedin className='icon' />
              </div>
              <div className="icon-con">
                <a target='_blank' href="mailto:jeremiahiasngu@gmail.com"><FaEnvelope className='icon' /></a>
              </div>
            </div>

          </div>
          
          <div className="image-section">
            <img src="/images/Bankole.png" alt="Jeremiah" />
          </div>
        </div>
    </div>
  )
}

export default Hero