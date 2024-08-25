import React from 'react'
import './Explore.css'
const Explore = ({programS, handlejoinclick}) => {
  return (
    <div className='explore' ref={programS}>
        <div className="exphead">
        <h1>Explore our <b>Programs</b> To shape you</h1>

        </div>
        <div className="cards">
            <div className="card1">
                <img src="assets/dumbell.svg" alt="" />
                <h1>Strength Training</h1>
                <p>In this program, you are trained to improve your strength through many exercises.</p>
                <button onClick={handlejoinclick}>Join Now <img src="assets/rightarrow.png" alt="" /></button>
            </div>
            <div className="card2">
                <img src="assets/runing.svg" alt="" />
                <h1>Cardio Training</h1>
                <p>In this program, you are trained to do sequential moves in range of 20 until 30 minutes.</p>
                <button onClick={handlejoinclick}>Join Now <img src="assets/rightarrow.png" alt="" /></button>
            </div>
            <div className="card3">
                <img src="assets/flame.svg" alt="" />
                <h1>Fat Burning</h1>
                <p>This program is suitable for you who wants to get rid of your fat and lose their weight.</p>
                <button onClick={handlejoinclick}>Join Now <img src="assets/rightarrow.png" alt="" /></button>
            </div>
            <div className="card4">
                <img src="assets/heartHealth.svg" alt="" />
                <h1>Health Fitness</h1>
                <p>This programs is designed for those who exercises only for their body fitness not body building.</p>
                <button onClick={handlejoinclick}>Join Now <img src="assets/rightarrow.png" alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default Explore
