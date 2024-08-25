import React from 'react'
import './Ready.css'
const Ready = ({plansb, handleBasicClick, handlePremiumClick, handleProClick}) => {

    return (
        <div className='Ready' ref={plansb}>
            <div className="readyhead">
                <h1>Ready to Start Your Journey now withus</h1>
            </div>
            <div className="cardys">
                <div className="cardy1">
                    <img src="assets/heartHealth.svg" alt="" />
                    <h1>BASIC PLAN</h1>
                    <h2>$ 25</h2>
                    <div className="pointt1">
                        <img src="assets/whiteTick.png" alt="" />
                        <h10>2 hours of excercises</h10>
                    </div>
                    <div className="pointt1">
                        <img src="assets/whiteTick.png" alt="" />
                        <h10>Free consultaion to coaches</h10>
                    </div>
                    <div className="pointt1">
                        <img src="assets/whiteTick.png" alt="" />
                        <h10>Access to The Community</h10>
                    </div>
                    <div className="pointt1">
                        <h10>See more benefits</h10>
                    <img src="assets/rightArrow.png" alt="" />
                    </div>
                    <button onClick={handleBasicClick}>Join Now</button>
                </div>
                <div className="cardy2">
                    <img src="assets/flame.svg" alt="" />
                    <h1>PREMIUM PLAN</h1>
                    <h2>$ 30</h2>
                    <div className="pointt1 flex">
                        <img src="assets/whiteTick.png" alt="" />
                        <h10>5 hours of excercises</h10>
                    </div>
                    <div className="pointt1 flex">
                        <img src="assets/whiteTick.png" alt="" />
                        <h10>Free consultaion to coaches</h10>
                    </div>
                    <div className="pointt1 flex">
                        <img src="assets/whiteTick.png" alt="" />
                        <h10>Accessto minibar</h10>
                    </div>
                    <div className="pointt1 flex">
                        <h10>See more benefits</h10>
                    <img src="assets/rightArrow.png" alt="" />
                    </div>
                    <button onClick={handlePremiumClick}>Join Now</button>
                </div>
                <div className="cardy1">
                    <img src="assets/dumbell.svg" alt="" />
                    <h1>PRO PLAN</h1>
                    <h2>$ 45</h2>
                    <div className="pointt1 flex">
                        <img src="assets/whiteTick.png" alt="" />
                        <h10>8 hours of excercises</h10>
                    </div>
                    <div className="pointt1 flex">
                        <img src="assets/whiteTick.png" alt="" />
                        <h10>Consultation of Private Coach</h10>
                    </div>
                    <div className="pointt1 flex">
                        <img src="assets/whiteTick.png" alt="" />
                        <h10>Free Fitness Merchandises</h10>
                    </div>
                    <div className="pointt1 flex">
                        <h10>See more benefits</h10>
                        <img src="assets/rightArrow.png" alt="" />
                    </div>
                    <button onClick={handleProClick}>Join Now</button>
                </div>
                <div className="blur2">
            </div>
            <div className="blur3"></div>
            </div>
        </div>
    )
}

export default Ready
