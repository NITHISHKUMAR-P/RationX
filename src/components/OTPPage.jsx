import React, { useState } from 'react';
import './OTPPage.css';

const OTPPage = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted OTP: ${otp}`);
    // You can add your API call or validation logic here
  };

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength="6"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OTPPage;
