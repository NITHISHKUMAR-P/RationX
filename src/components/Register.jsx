import React from 'react';
import './style.css'; // Make sure this path is correct

const Register = () => {
  return (
    <div className="container">
        <h3>RationX</h3>
      <form className="form-box">
        
        <h2>Register Page</h2>
        <div className="input-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Nam"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter your card number"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <button type="submit" className="otp-btn">Get OTP</button>
      </form>
    </div>
  );
};

export default Register;
