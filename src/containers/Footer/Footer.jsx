import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import {FaGithub, FaTwitter, FaLinkedin, FaEnvelope} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer-container flex'>
        <div className="footer-content">
            <div className="more-contact-details">
                {/* <h2><span>Email: </span>Bankolejeremiahadeoye@gmail.com</h2> */}
                <h2><span>Contact: </span>+234 815-0420-521</h2>
            </div>

            <div className="contact-link flex">
                <div className="icon-con">
                    <Link target='_blank' to={"https://github.com/Adeoye-J"}><FaGithub className='icon' /></Link>
                </div>
                <div className="icon-con">
                    <Link target='_blank' to={"https://x.com/bankolejeremia6"}><FaTwitter className='icon' /></Link>
                </div>
                <div className="icon-con">
                    <Link target='_blank' to={"https://www.linkedin.com/in/jeremiah-bankole"}><FaLinkedin className='icon' /></Link>
                </div>
                <div className="icon-con">
                    <a target='_blank' href="mailto:bankolejeremiahadeoye@gmail.com"><FaEnvelope className='icon' /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer