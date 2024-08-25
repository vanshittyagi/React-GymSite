import Navbar from "./Components/Navbar";
import './App.css'
import React, { useRef, useState } from 'react'
import Leftsec from "./Components/Leftsec";
import Rightsec from "./Components/Rightsec";
import Explore from "./Components/Explore";
import Reason from "./Components/Reason";
import Ready from "./Components/Ready";
import Testimonials from "./Components/Testimonails";
import Footer from "./Components/Footer";
import Learn from "./Components/Learn"
import Join from "./Components/Join"
import Basicplan from "./Components/Basicplan";
import Premium from "./Components/Premium";
import Pro from "./Components/Proplan";

function App() {
  const [showJoin, setShowJoin] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showbasic, setShowBasic] = useState(false);
  const [showpremium, setShowPremium] = useState(false);
  const [showpro, setShowPro] = useState(false);
  const joinRef = useRef(null)
  const homeS = useRef(null);
  const plansb = useRef(null);
  const programS = useRef(null);
  const WhyusS = useRef(null);
  const testS = useRef(null);

  const goingtohome = () => {
    if (homeS.current) {
      homeS.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const goingtoplans = () => {
    console.log("clicked")
    if (plansb.current) {
      plansb.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const goingtoprograms = () => {
    if (programS.current) {
      programS.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const goingtowhyus = () => {
    if (WhyusS.current) {
      WhyusS.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const goingtotest = () => {
    if (testS.current) {
      testS.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinClick = () => {
    setShowJoin(true);
    if (joinRef.current) {
      joinRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleJoinBack = () => {
    setShowJoin(false);
  };

  const handleLearnClick = () => {
    setShowLearn(true);
  };

  const handleLearnBack = () => {
    setShowLearn(false);
  };
  const handleBasicClick = () => {
    setShowBasic(true);
  }
  const handleBasicBack = () => {
    setShowBasic(false);
  }
  const handlePremiumClick = () => {
    setShowPremium(true);
  }
  const handlePremiumBack = () => {
    setShowPremium(false);
  }
  const handleProClick = () => {
    setShowPro(true);
  }
  const handleProBack = () => {
    setShowPro(false);
  }

  return (
    <div className="App">
      {!showJoin && !showLearn && !showbasic && !showpremium && !showpro ? (
        <>
          <Navbar
            goingtoplans={goingtoplans}
            goingtohome={goingtohome}
            goingtoprograms={goingtoprograms}
            goingtowhyus={goingtowhyus}
            goingtotest={goingtotest}
            handlejoinclick={handleJoinClick}
          />
          <div className="flex">
            <Leftsec
              homeS={homeS}
              handlejoinclick={handleJoinClick}
              handlelearnclick={handleLearnClick}
            />
            <Rightsec />
          </div>
          <Explore programS={programS} handlejoinclick={handleJoinClick} />
          <Reason WhyusS={WhyusS} />
          <Ready plansb={plansb} handleBasicClick={handleBasicClick} handlePremiumClick={handlePremiumClick} handleProClick={handleProClick} />
          <Testimonials testS={testS} />
          <Footer />
        </>
      ) : showJoin ? (
        <Join handlejoinback={handleJoinBack}  />
      ) : showLearn ? (
        <Learn handlelearnback={handleLearnBack} />
      ) : showpremium ? (
        <Premium handlePremiumBack={handlePremiumBack}/>
      ) : showpro ? (
        <Pro handleProBack={handleProBack}/>
      ) : (
        <Basicplan handleBasicBack={handleBasicBack} />
      )}
    </div>
  );
}

export default App;
