import React from 'react'
import {FaGlobe, FaGithub} from "react-icons/fa"
import {Link} from "react-router-dom"
import "./item.css"

const Item = ({title, demo_link, repository_link, cover_image}) => {
    
    
    return (
        <div className='item flex'>
            <div className="image-container">
                <img src={cover_image} alt="Cover Image for Project" />
            </div>
            <div className="action">
                <a className='icon-con' href={demo_link} target='_blank'>
                    <FaGlobe className='icon' />
                </a>
                <a className='icon-con' href={repository_link} target='_blank'>
                    <FaGithub className='icon' />
                </a>
            </div>
            {/* <div className="action-container flex">
                <h2>{title}</h2>
                <div className="action flex">
                    <a className='link' href={demo_link} target='_blank'>View Site</a>
                    <a className='link' href={repository_link} target='_blank'>View Code</a>
                </div>
            </div> */}
        </div>
    )
}

export default Item