import React, { useEffect, useState } from 'react'
import './Leftsec.css'
const Leftsec = ({plansb, handlejoinclick, handlelearnclick}) => {
    
  const [count, setCount] = useState(0);
  const [count2, setcount2] = useState(790);
  const [count3, setcount3] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 140) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 10); 
    return () => clearInterval(interval); 
  }, []);
  useEffect(()=>{
    const interval2 = setInterval(() => {
        setcount2((prevCount2) => {
            if (prevCount2 < 940) {
                return prevCount2 + 1;
            }
            else {
                return prevCount2;
            }
        });
    }, 10);
    return () => clearInterval(interval2);
  },[]);
  useEffect(()=>{
    const interval3 = setInterval(() => {
        setcount3((prevCount3) => {
            if (prevCount3 < 50){
                return prevCount3 + 1;
            } else {
                return prevCount3;
            }
        });
    }, 30)
    return () => clearInterval(interval3);
  },[]);
    return (
        <div className='mid-container' ref={plansb}>
            <div className="blur">
            </div>
            <div className="town">
                <h1>THE BEST FITNESS CLUB IN THE TOWN</h1>
                <div className="ball"></div>
            </div>
            <div className="mainhead">
                <h1>Shape <b>Your <br />
                    Ideal body</b> </h1>
                <p>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
            </div>
            <div className="flex space">
                <div className="calc flex">
                    <div className="coach flexy">
                        <h2>{`+${count}`}</h2>
                        <h1>Coaches</h1>
                    </div>
                    <div className="member flexy">
                        <h2>{`+${count2}`}</h2>
                        <h1>Members joined</h1>
                    </div>
                    <div className="program flexy">
                        <h2>{`+${count3}`}</h2>
                        <h1>fitness programs</h1>
                    </div>
                </div>
                <div className="calories flex">
                    <img src="assets/calories.png" alt="" />
                    <div className="right">
                        <h1>Calories burned</h1>
                        <h2>220 kcal</h2>
                </div>
            </div>
            </div>
            <div className="buttons">
                <button className='orange' onClick={handlejoinclick}>Get Started</button>
                <button className='trans' onClick={handlelearnclick}>Learn More</button>
            </div>
        </div>
    )
}

export default Leftsec;
