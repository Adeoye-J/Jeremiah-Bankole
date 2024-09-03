import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {RiMenu3Fill, RiCloseFill} from "react-icons/ri"
import "./navBar.css"

const Menu = ({selectedMenu, setSelectedMenu}) => {

    const handleClick = (menuName) => {
        setSelectedMenu(menuName)
    }

    return(
        <ul className='list-items flex'>
            <Link className='list-item' to={"/home"}><li className={`${selectedMenu === "About Me" && "underline"}`} onClick={() => handleClick("About Me")}>About Me</li></Link>
            <Link className='list-item' to={"/skills"}><li className={`${selectedMenu === "Skills" && "underline"}`} onClick={() => handleClick("Skills")}>Skills</li></Link>
            <Link className='list-item' to={"/projects"}><li className={`${selectedMenu === "Projects" && "underline"}`} onClick={() => handleClick("Projects")}>Projects</li></Link>
            <Link className='list-item' to={"/contact-me"}><li className={`${selectedMenu === "Contact Me" && "underline"}`} onClick={() => handleClick("Contact Me")}>Contact Me</li></Link>
        </ul>
    )
}

const NavBar = () => {

    const [selectedMenu, setSelectedMenu] = useState("")
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    

  return (
    <div className='navbar-container flex'>
        <div className="navbar-content flex">
            <div className="logo flex">
                <Link className='logo-text' to={"/home"}><h1>Jeremiah</h1></Link>
            </div>

            <div className="menu-container">
                <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            </div>
            
            {
                showMobileMenu &&
                <div className="mobile-container">
                    <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

                    <div className="icon-con">
                        <RiCloseFill onClick={() =>setShowMobileMenu(false)} className='icon' />
                    </div>
                </div>
            }
            

            <div className="icon-con">
                <RiMenu3Fill onClick={() => setShowMobileMenu(true)} className='icon' />
            </div>
        </div>
    </div>
  )
}

export default NavBar