import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleAuthProvider } from "./Firebase";
import { Button } from "@mui/material";
import { SiGoogle } from "react-icons/si";
import Logins from "../Firebase_ui/Logins";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Changed variable name to navigate

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert("Email registered successfully. Please login.");
      navigate("/login"); // Changed to lowercase "login"
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
      alert("Google registration successful. Please proceed.");
      navigate("/login"); // Changed to lowercase "login"
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div >
      <div>
        <h1>Hi Welcome to the register page</h1> {/* Added space after "Hi" */}
        {/* <form onSubmit={handleRegister}> */}
          {/* <input
            type="email"
            placeholder="Register With Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            style={{ padding: "10px", width: "80%" ,marginBottom:'10px'}}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{ padding: "10px", width: "80%" }}
          /> 
   <div>
    <button onClick={handleRegister}>Register</button>
   </div>
          </form> */}

   {/* <button onClick={handleGoogleRegister}>Register with google</button>        */}
          <Logins/>

 


      </div>
    </div>
  );
};

export default Register;
