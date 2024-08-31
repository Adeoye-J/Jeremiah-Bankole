import React, { useState } from 'react'
import "./skills.css"

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState("")

  return (
    <div className='skills-container flex'>
      <div className="skills-content">
        <div className="skills-hero flex">
          <div className="skills-heading flex">
            <h1>What Skills do I have?</h1>
            <p>Depends on who is asking.</p>
          </div>

          <div className="image-section">
            {/* <img src="/images/Jeremiah_Bankole (2).png" alt="Jeremiah" /> */}
            <img src="/images/Jeremiah.png" alt="Jeremiah" />
          </div>
        </div>
        <div className="skills-details flex">
          <ul className="skills-title flex">
            <li className={`flex ${selectedSkill === "random" && "chosen-skill"}`} onClick={() => setSelectedSkill("random")}>A Random Person</li>
            <li className={`flex ${selectedSkill === "potential" && "chosen-skill"}`} onClick={() => setSelectedSkill("potential")}>A Potential Employer</li>
          </ul>
          {
            selectedSkill === "random" && 
            <div className='skills'>
              Computer Skills (5yrs+) - Word, Excel, Powerpoint, etc
              Writing (4yrs+) - Standard and Professional
              Tutor (4yrs+) - STEM Courses
              Communication 
            </div>
          }
          {
            selectedSkill === "potential" && 
            <div className='skills'>
              Front End Web Development (Dominant)- 
              HTML (4yrs +)
              CSS (3yrs +)
              JavaScript (2yrs +)
              Tailwind (1yr +)
              Bootstrap (1yr +)
              API (1yr +)
              React (1yr +)
              Git/Github (3yrs +)
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