import React from 'react';
import './Learn.css';

const Learn = ({ handlelearnback }) => {
    return (
        <div className="about-gym">
            <div className="buttonlearn">
            <button onClick={handlelearnback} >Back To HOME</button>
            <img src="logo.webp" alt="" />
            </div>
            <div className="sectiony mission-statement">
                <h2>Our Mission</h2>
                <p>At Peak Fitness, our mission is to inspire and empower our community to lead healthier, happier lives through exceptional fitness experiences. We believe in fostering a welcoming environment where everyone can achieve their personal fitness goals.</p>
            </div>
            <div className="sectiony history-background">
                <h2>Our Journey</h2>
                <p>Founded in 2010 by fitness enthusiasts, Peak Fitness has grown from a small neighborhood gym to a state-of-the-art fitness center. Over the years, we've expanded our facilities, added cutting-edge equipment, and introduced a wide range of classes to cater to all fitness levels. Our commitment to excellence has earned us recognition as the best gym in the region.</p>
            </div>
            <div className="sectiony facility-overview">
                <h2>Our Facilities</h2>
                <ul>
                    <li>Over 20,000 sq. ft. of workout space</li>
                    <li>Latest cardio and strength training equipment</li>
                    <li>Olympic-sized swimming pool</li>
                    <li>Yoga and pilates studios</li>
                    <li>Sauna, steam room, and spa services</li>
                    <li>Fully equipped locker rooms with showers</li>
                </ul>
            </div>
            <div className="ourgymimages">
                <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <img src="https://images.pexels.com/photos/1144864/pexels-photo-1144864.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                <img src="https://media.istockphoto.com/id/1132006407/photo/empty-gym.jpg?s=1024x1024&w=is&k=20&c=iGC9lJUQOT4copJjwL9PCf41Eu7bn9y0hdkdinqwoac=" alt="" />
                <img src="https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                <img src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    );
}

export default Learn;
