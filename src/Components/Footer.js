import React, { useState } from 'react'
import './Footer.css'
import axios from 'axios';
const Footer = () => {
    const [email, setemail] = useState('');
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
    
    const handlesubmit = async (e) => {
        if (!validateEmail(email)){
            alert("Wrong Email");
            setemail('');
        }
        else {
            e.preventDefault();
            const apiURL = 'https://sheet.best/api/sheets/3a8d1c43-f090-4f53-b11a-e0f5ff5cb511';
            console.log("I'm clicked")
            try {
                const response = await axios.post(apiURL, { email: email });
                if (response.status === 200) {
                    alert("Email Registered successfully!")
                }
            } catch (error) {
                console.error('Error submitting email:', error);
                alert('There was an error submitting your email.');
            }
            setemail('');
        }
    }
    return (
        <>
            <div className='firstsectionn'>
                <h1>Ready to Level up <b>your body with us?</b></h1>
                <div className="inpbtn">
                    <input type="email"
                        placeholder="Enter your Email Address here.."
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required />
                    <button onClick={handlesubmit}>Join Now</button>
                </div>
            </div>
            <div className="lastsection">
                <div className="line"></div>
                <div className="images">
                    <a href="https://github.com/vanshittyagi"><img src="assets/github.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/vanshit-tyagi-8ab426279/"><img src="assets/linkedin.png" alt="" /></a>
                    <a href="https://x.com/vanshit_codes"><img src="assets/x.svg" alt="" /></a>
                </div>
                <img className='logolast' src="logo.webp" alt="" />
                <div className="blur4"></div>
                <div className="blur5"></div>
            </div>
        </>
    )
}

export default Footer
