import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Register from './components/Register.jsx'
import OTPPage from './components/OTPPage.jsx'
import SlotBooking from './components/SlotBooking.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Register/> */}
    {/* <OTPPage/> */}
<<<<<<< HEAD
    <App />
=======
    <SlotBooking/>
>>>>>>> 5f6f8582abdd467d3c5109c90c1a309560f4d305
  </StrictMode>,
)
