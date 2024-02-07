// timer.sj
import React, { useEffect, useState } from "react";
import './ModalTimer.css'

function App() {
  // State variables to manage OTP input, minutes, and seconds
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const[animation,setAnimation]=useState(true)

  useEffect(() => {
    // Function to handle the countdown logic
    
    const interval = setInterval(() => {
      // Decrease seconds if greater than 0
      if (seconds > 0) {
        setSeconds(seconds - 1);
       
      }

      // When seconds reach 0, decrease minutes if greater than 0
      if (seconds === 0) {
        if (minutes === 0) {
          // Stop the countdown when both minutes and seconds are 0
          clearInterval(interval);
        } else {
          // Reset seconds to 59 and decrease minutes by 1
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000); // Run this effect every 1000ms (1 second)

    return () => {
      // Cleanup: stop the interval when the component unmounts
      clearInterval(interval);
    };
  }, [seconds]); // Re-run this effect whenever 'seconds' changes

  // Function to resend OTP
  const resendOTP = () => {
    setMinutes(0);
    setSeconds(10);
    setAnimation()
  };

  return (
   <div>
{seconds ===0 ?""
  :    <div className="loader">
  <span></span> </div> }


    <div className="container">
      <div className="card" style={{border:"none"}}>


        <div className="countdown-text">
          {/* Display countdown timer if seconds or minutes are greater than 0 */}
          
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining:{" "}
              <span style={{ fontWeight: 600 }}>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
            </p>
          ) : (
            // Display if countdown timer reaches 0
            <p style={{color:"red"}}>Didn't receive OTP?</p>
          )}

          {/* Button to resend OTP */}
         
          {seconds ===0 ?  <button
            // disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
            }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>:"" }
        </div>

        {/* Button to submit OTP */}
        {/* <button className="submit-btn">SUBMIT</button> */}
      </div>
    </div>
    
   </div>
  );
}

export default App;

//  classname Loading.css
// ModalTimer Animation Loading from UIverse

.loader {
  box-sizing: border-box;
  display: inline-block;
  width: 50px;
  height: 80px;
  border-top: 5px solid #fff;
  border-bottom: 5px solid #fff;
  position: relative;
  background: linear-gradient(#FF3D00 30px, transparent 0) no-repeat;
  background-size: 2px 40px;
  background-position: 50% 0px;
  animation: spinx 5s linear infinite;
}

.loader:before, .loader:after {
  content: "";
  width: 40px;
  left: 50%;
  height: 35px;
  position: absolute;
  top: 0;
  transform: translatex(-50%);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0 0 20px 20px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: 0 0px;
  animation: lqt 5s linear infinite;
}

.loader:after {
  top: auto;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  animation: lqb 5s linear infinite;
}

@keyframes lqt {
  0%, 100% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0% 0px;
  }

  50% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0% 40px;
  }

  50.1% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0% -40px;
  }
}

@keyframes lqb {
  0% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0 40px;
  }

  100% {
    background-image: linear-gradient(#FF3D00 40px, transparent 0);
    background-position: 0 -40px;
  }
}

@keyframes spinx {
  0%, 49% {
    transform: rotate(0deg);
    background-position: 50% 36px;
  }

  51%, 98% {
    transform: rotate(180deg);
    background-position: 50% 4px;
  }

  100% {
    transform: rotate(360deg);
    background-position: 50% 36px;
  }
}
    
  

.container{
  border: none;
}
