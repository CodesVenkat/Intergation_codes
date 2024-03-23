import React from 'react';
import { Button } from '@mui/material';
import { auth } from './Firebase';
import { useLocation, useNavigate } from 'react-router-dom';

const Loginsuccess = () => {
  const location = useLocation();
  const datas = location.state.email;
  const navi = useNavigate()

  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log("User signed out successfully");
      navi("/")
    }).catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <div>
      <h1>Hello User {datas}</h1>
      <h1>Login Successful</h1>
    <div style={{display:"flex",justifyContent:"center"}}>
    <Button onClick={handleLogout} >Logout</Button>
    </div>
    </div>
  );
};

export default Loginsuccess;
