import React from 'react'
import './Navbar.css'
const Navbarjoin = ({handlejoinback}) => {
  return (
    <div className='navbar'>
      <img src="logo.webp" alt="" />
      <div className="button">
        <button onClick={handlejoinback}>Back To HOME</button>
      </div>
    </div>
  )
}

export default Navbarjoin
