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
