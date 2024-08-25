import React from 'react'
import './RIghtsec.css'
const Rightsec = () => {
  return (
    <div className='hero-container'>
        <div className="heartbeat">
        <img src="assets/heart.png" alt="" />
        <h1>Heart Rate</h1>
        <p>116 BPM</p>
        </div>
        <div className="image">
        <img src="assets/hero_image.png" alt="" />
        </div>
        <div className="bgimg">
            <img src="assets/hero_image_back.png" alt="" />
        </div>
    </div>
  )
}

export default Rightsec
