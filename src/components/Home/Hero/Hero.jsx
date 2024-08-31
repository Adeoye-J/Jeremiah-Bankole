import React from 'react'
import "./hero.css"
import {FaWhatsapp, FaTwitter, FaLinkedin, FaEnvelope} from "react-icons/fa"

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
              <h2>Interested in my projects rightaway?</h2>
              <button>Check them out here!</button>
            </div>

            <div className="contact-link flex">
              <div className="icon-con">
                <FaWhatsapp className='icon' />
              </div>
              <div className="icon-con">
                <FaTwitter className='icon' />
              </div>
              <div className="icon-con">
                <FaLinkedin className='icon' />
              </div>
              <div className="icon-con">
                <FaEnvelope className='icon' />
              </div>
            </div>

          </div>
          
          <div className="image-section">
            <img src="/images/Jeremiah_Bankole (2).png" alt="Jeremiah" />
          </div>
        </div>
    </div>
  )
}

export default Hero