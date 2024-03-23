import React, { useState } from "react";
import { auth, googleAuthProvider } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { SlSocialGoogle } from "react-icons/sl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log(email);
      console.log(password);
      navigate("/LoginSuccess", { state: { email } });
    } catch (error) {
      alert("Invalid Username and Password. Please try again.");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      const googleEmail = result.user.email;
      navigate("/LoginSuccess", { state: { email: googleEmail } });
    } catch (error) {
      alert("Google Login Error: " + error.message);
    }
  };

  return (
    <Box className="forms">
      <h1>Welcome to Login page</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <TextField
            fullWidth
            type="email"
            label="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{marginBottom:'12px'}}
          />
          <TextField
            fullWidth
            type="password"
            label="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <Button type="submit" >
            Login
          </Button>
        </div>
      </form>
      <Button onClick={handleGoogleRegister}  style={{marginLeft:"140px"}}>
        Login with Google <SlSocialGoogle style={{ marginLeft: "10px", fontSize: "25px" }} />
      </Button>
    </Box>
  );
};

export default Login;
