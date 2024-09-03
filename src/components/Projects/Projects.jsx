import React from 'react'
import "./projects.css"
import data from "../../../projects_data.json"
import ItemList from './ItemList/ItemList'

const Projects = () => {
  return (
    <div className='projects-container flex'>
        <div className="projects-content">
          <div className="projects-hero flex">
            <div className="projects-heading flex">
                <h1>My FrontEnd Projects</h1>
                <p>View Projects below based on level of experience</p>
            </div>
            <div className="image-section">
              <img src="/images/Bankole.png" alt="Jeremiah" />
            </div>
          </div>
          <div className="project-details flex">
            <div className="individual-section">
              <h2 className='project-title'>Beginner Projects</h2>
              <ItemList data={data["beginners"]}/>
            </div>
            <div className="individual-section">
              <h2 className='project-title'>Intermediate Projects</h2>
              <ItemList data={data["intermediate"]}/>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Projects