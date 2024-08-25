import React from 'react'
import './Navbar.css'
const Navbar = ({ goingtoplans, goingtohome, goingtoprograms, goingtowhyus, goingtotest, handlejoinclick }) => {
  return (
    <div className='navbar'>
      <img src="logo.webp" alt="" />
      <div className="nav-items">
        <ul>
          <li onClick={goingtohome}>Home</li>
          <li onClick={goingtoplans}>Plans</li>
          <li onClick={goingtoprograms}>Programs</li>
          <li onClick={goingtowhyus}>Why US</li>
          <li onClick={goingtotest}>Testimonials</li>
        </ul>
      </div>
      <div className="button">
        <button onClick={handlejoinclick}>Join Now</button>
      </div>
    </div>
  )
}

export default Navbar
