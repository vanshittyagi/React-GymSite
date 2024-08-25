import React, { useState } from 'react'
import "./Testimonials.css"
import { testimonialsData } from '../testimonialsData'
const Testimonails = ({testS}) => {
    const [selected, setselected] = useState(0)
    const lLenght = testimonialsData.length;
    const onhandleclick = () => {
        setselected((prevselected)=> (prevselected +1) %lLenght);
    }
    return (
        <div className='test' >
            <div className="lefttest" ref={testS}>
                <div className="chipku">
                    <h1>Testimonials</h1>
                    <h2>What they <b>say about us</b></h2>
                </div>
                <div className="spany">
                <span> 
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span className='namey'>{testimonialsData[selected].name}</span> {" "} <span className='statusspan'>- {testimonialsData[selected].status}</span> <span className='arrowimg' >
                        <img src="assets/leftArrow.png" alt="Back" onClick={onhandleclick} />
                        <img src="assets/rightArrow.png" alt="Front" onClick={onhandleclick} /></span>
                </span>
                </div>
            </div>
            <div className="righttest">
                <div className="imageback"></div>
                <span>
                    {testimonialsData[selected].image}
                </span>
            </div>
        </div>
    )
}

export default Testimonails
