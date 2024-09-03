import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import { Link } from 'react-router-dom'
import {FaGithub, FaWhatsapp, FaTwitter, FaLinkedin, FaEnvelope} from "react-icons/fa"
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="contact-content">
            <div className="image-container">
                <div className="image-section">
                    <img src="/images/Bankole.png" alt="Jeremiah" />
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
                        <a target='_blank' href="mailto:bankolejeremiahadeoye@gmail.com"><FaEnvelope className='icon' /></a>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <h1>Contact Me</h1>
                <ContactForm />
            </div>
        </div>
    </div>
  )
}

export default Contact