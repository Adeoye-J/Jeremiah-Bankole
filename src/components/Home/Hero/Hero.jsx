import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div className='hero-container flex'>
        <div className="hero-content flex">
          <div className="text-section flex">

            <div className="basic-info flex">
              <span>Keeping it simple!</span>
              <h3>Hello, I'm</h3>
              <h1>Jeremiah Bankole</h1>
              <h4>Let it stick</h4>
            </div>

            <div className="action flex">
              <h2>Interested in my projects rightaway?</h2>
              <button>Check them out here!</button>
            </div>

          </div>

          <div className="image-section">
            <img src="/images/Jeremiah_Bankole.png" alt="Jeremiah" />
          </div>
        </div>
    </div>
  )
}

export default Hero