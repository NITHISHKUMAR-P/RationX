<<<<<<< HEAD
import { useState } from "react";
import axios from "axios";
import "./App.css";
import SlotBooking from "./components/SlotBooking";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1=register, 2=otp, 3=slotbooking

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/otp/send/sms", null, {
        params: { phone: mobileNumber },
      });
      alert("OTP sent to your phone!");
      setStep(2);
    } catch (err) {
      alert("Error sending OTP");
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/otp/verify", null, {
        params: { key: mobileNumber, otp },
      });
      alert(res.data.message);
      if (res.data.message.includes("Successfully")) {
        setStep(3); // Go to SlotBooking after success
      }
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  if (step === 3) {
    return <SlotBooking />;
  }

  return (
    <div className="container">
      {step === 1 && (
        <form className="form-box" onSubmit={sendOtp}>
          <h2>Register</h2>
          <div className="input-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter your card number"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <button type="submit" className="otp-btn">Get OTP</button>
        </form>
      )}

      {step === 2 && (
        <form className="form-box" onSubmit={verifyOtp}>
          <h2>Enter OTP</h2>
          <div className="input-group">
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              required
            />
          </div>
          <button type="submit" className="otp-btn">Verify OTP</button>
        </form>
      )}
    </div>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
    {/* //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p> */}
    
    <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Register Page</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <form class="form-box">
      <h2>Register</h2>
      <div class="input-group">
        <label for="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" required />
      </div>
      <div class="input-group">
        <label for="mobileNumber">Mobile Number</label>
        <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="Enter your mobile number" required />
      </div>
      <button type="submit" class="otp-btn">Get OTP</button>
    </form>
  </div>
</body>
    </>
  )
}

export default App
>>>>>>> 5f6f8582abdd467d3c5109c90c1a309560f4d305
