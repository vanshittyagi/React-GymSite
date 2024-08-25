import React, { useState } from 'react';
import './Basicplan.css';
import Footer from './Footer';

const Premiumplan = ({ handlePremiumBack }) => {
  const [upiId, setUpiId] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  const paytmSuffixes = [
    '@paytm',
    '@paytmpay',
    '@pay',
    '@paytmupi',
    '@icici',
    '@payzapp'
  ];
  
  const phonepeSuffixes = [
    '@ybl',    
    '@axl',    
    '@ibl',    
    '@iblupi', 
    '@kbl',    
    '@pingpay',
    '@payzapp' 
  ];

  const gpaySuffixes = [
    '@okaxis',    
    '@okhdfcbank',
    '@okicici',   
    '@oksbi',     
    '@okpnb',     
    '@okunion',   
    '@okboi'      
  ];

  // Function to validate UPI ID based on the selected payment method
  const validateUpiId = () => {
    let validSuffixes = [];
    
    switch (selectedPayment) {
      case 'paytm':
        validSuffixes = paytmSuffixes;
        break;
      case 'phonepay':
        validSuffixes = phonepeSuffixes;
        break;
      case 'googlepay':
        validSuffixes = gpaySuffixes;
        break;
      default:
        alert('Please select a payment method');
        return false;
    }

    const trimmedUpiId = upiId.trim().toLowerCase(); // Trim and lowercase
    const isValid = validSuffixes.some(suffix => trimmedUpiId.endsWith(suffix));
    if (isValid) {
      return true;
    } else {
      alert(`Wrong UPI ID for the selected payment method: ${selectedPayment}`);
      return false;
    }
  };

  const paymentdone = () => {
    if (validateUpiId()) {
      alert("Payment successful");
    }
  };

  return (
    <div className="Basic">
      <div className="buttonlearn">
        <button onClick={handlePremiumBack}>Back To HOME</button>
        <img src="logo.webp" alt="Logo" />
      </div>
      <div className="leftrightsec">
        <div className="leftbasic">
          <h1>Premium Plan</h1>
          <h2>$30</h2>
          <div className="basicpoints">
            <div className="pointt1">
              <img src="assets/tick.png" alt="Tick" />
              <span>5 hours of exercises</span>
            </div>
            <div className="pointt1">
              <img src="assets/tick.png" alt="Tick" />
              <span>Free consultation with coaches</span>
            </div>
            <div className="pointt1">
              <img src="assets/tick.png" alt="Tick" />
              <span>Access to minibar</span>
            </div>
          </div>
        </div>
        <div className="rightbasic">
          <div className="upbasic">
            <h1>Payment Details</h1>
            <div className="tracking">
              <h1><b>1 </b> Information.....</h1>
              <h2><b>2 </b> Payment Details.....</h2>
              <h3><b>3 </b> Complete the Payment</h3>
            </div>
          </div>
          <div className="basicbox1">
            <h1>Payment Method</h1>
            <div className="basicmode">
              <label>
                <input type="radio" name="payment" value="paytm" onChange={(e) => setSelectedPayment(e.target.value)} />
                <span>Paytm</span>
              </label>
            </div>
            <div className="flex">
              <label>
                <input type="radio" name="payment" value="phonepay" onChange={(e) => setSelectedPayment(e.target.value)} />
                <span>PhonePay</span>
              </label>
            </div>
            <div className="flex">
              <label>
                <input type="radio" name="payment" value="googlepay" onChange={(e) => setSelectedPayment(e.target.value)} />
                <span>GooglePay</span>
              </label>
            </div>
          </div>
          <div className="basicbox2">
            <div className="totalvalue">
              <h1>Total</h1>
              <p>$30</p>
            </div>
            <div className="payinpbtn">
              <input 
                type="text" 
                placeholder="Enter UPI Id.." 
                value={upiId} 
                onChange={(e) => setUpiId(e.target.value)} 
              />
              <button onClick={paymentdone}>Pay</button>
            </div>
            <div className="blur4"></div>
            <div className="blur5"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Premiumplan;
