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
