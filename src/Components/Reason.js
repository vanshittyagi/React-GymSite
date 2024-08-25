import React from 'react'
import './Reason.css'
const Reason = ({WhyusS}) => {
    return (
        <div className='Reason flex' ref={WhyusS}>
            <div className="left flex">
                <div className="oneimg">
                    <img src="assets/image1.png" alt="" className='img1' />
                </div>
                <div className="threeimg ">
                    <img src="assets/image2.png" alt="" className='img2' />
                    <div className="twoimg">
                        <img src="assets/image3.png" alt="" className='img3' />
                        <img src="assets/image4.png" alt="" className='img4' />
                    </div>
                </div>
            </div>
            <div className="righty">
                <h1>some reasons</h1>
                <h2>Why choose us?</h2>
                <div className="point1 flex">
                <img src="assets/tick.png" alt="" />                    
                    <h10>over 140+ expert coachs</h10>
                </div>
                <div className="point1 flex">
                    <img src="assets/tick.png" alt="" />
                    <h10>train smarter and faster than before</h10>
                </div>
                <div className="point1 flex">
                    <img src="assets/tick.png" alt="" />
                    <h10>1 free program for new member</h10>
                </div>
                <div className="point1 flex">
                    <img src="assets/tick.png" alt="" />
                    <h10>reliable partners</h10>
                </div>
                <div className="h7">
                <h7>OUR PARTNERS</h7>

                </div>
                <div className="h7img flex">
                    <img src="assets/adidas.png" alt="" />
                    <img src="assets/nb.png" alt="" />
                    <img src="assets/nike.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reason
