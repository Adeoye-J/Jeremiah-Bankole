import React, { useState } from 'react'
import "./skills.css"
import {FaHtml5, FaCss3, FaReact, FaBootstrap, FaGithub} from "react-icons/fa"

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState("potential")

  return (
    <div className='skills-container flex'>
      <div className="skills-content">
        <div className="skills-hero flex">
          <div className="skills-heading flex">
            <h1>What Skills do I have?</h1>
            <p>Depends on who is asking.</p>
          </div>

          <div className="image-section">
            <img src="/images/Bankole.png" alt="Jeremiah" />
          </div>
        </div>
        <div className="skills-details flex">
          <ul className="skills-title flex">
            <li className={`flex ${selectedSkill === "potential" && "chosen-skill"}`} onClick={() => setSelectedSkill("potential")}>A Potential Employer</li>
            <li className={`flex ${selectedSkill === "random" && "chosen-skill"}`} onClick={() => setSelectedSkill("random")}>A Random Person</li>
          </ul>
          {
            selectedSkill === "random" && 
            <ul className='skills flex'>
              <li>Computer Skills (5yrs+) - Word, Excel, Powerpoint, etc</li>
              <li>Writing (4yrs+) - Standard and Professional</li>
              <li>Tutoring (4yrs+) - STEM Courses</li>
              <li>Network Engineer (2yrs+)</li>
              <li>Web Development (4yrs+)</li>
              <li>Communication Skills</li>
              <li>Problem-Solving</li>
            </ul>
          }
          {
            selectedSkill === "potential" && 
            <div>
              <ul className='skills flex'>
                <li>HTML (4yrs +) <FaHtml5 /></li>
                <li>CSS (3yrs +) <FaCss3 /></li>
                <li>JavaScript (2yrs +) <FaHtml5 /></li>
                <li>Tailwind (1yr +) <FaHtml5 /></li>
                <li>Bootstrap (1yr +) <FaBootstrap /></li>
                <li>SCSS (1yr +) <FaHtml5 /></li>
                <li>API (1yr +) <FaHtml5 /></li>
                <li>React (1yr +) <FaReact /></li>
                <li>Git/Github (3yrs +) <FaGithub /></li>
              </ul>
              <h2>Others Included: </h2>
              <ul className='skills flex'>
                <li>Responsive Design</li>
                <li>CSS Preprocessors (Sass)</li>
                <li>Vanilla JavaScript</li>
                <li>State Management</li>
                <li>Module Bundlers (Vite)</li>
                <li>Restful APIs</li>
                <li>Third-Party APIs like Facebook Graph API</li>
                <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
                <li>Web Hosting</li>
                <li>Testing/Debugging</li>
              </ul>
              <h2>Soft Skills:</h2>
              <ul className='skills flex'>
                <li>Effective communication</li>
                <li>Collaboration</li>
                <li>Problem-Solving</li>
                <li>Attention to detail</li>
                <li>Time management</li>
                <li>Adaptability</li>
                <li>Teamwork</li>
                <li>Self-motivation</li>
                <li>Willingness to learn</li>
                <li>Critical thinking</li>
                <li>Patience</li>
              </ul>
            </div>
          }
        </div>


        {/* <div className="image-section">
          <img src="/images/Jeremiah_Bankole (2).png" alt="Jeremiah" />
          <img src="/images/Jeremiah.jpg" alt="Jeremiah" />
        </div> */}
      </div>
    </div>
  )
}

export default Skills