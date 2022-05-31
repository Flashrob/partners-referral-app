import React, { useState } from "react";
import Container from '@mui/material/Container';

export default function Notification({loggedIn, loginError, userData, notificationText, setNotificationText}) {
  if (loggedIn){
    console.log(`loggedIn: ${loggedIn}`);
    setNotificationText(`Login State is ${loggedIn}. Welcome back, ${userData.type} ${userData.name}! Your ID is ${userData.id}`);
    console.log("userData state now:");
    console.log(userData);
    console.log(loggedIn);
  }
  if (loginError){
    console.log(`loginError: ${loginError}`);
    setNotificationText('Login Error detected! Please try logging in again...');
  }
  if (loggedIn === false){
    setNotificationText(`Please login!`);
  }

  return (
    <div>
      <br></br>
      <Container maxWidth ="md">
        <p>{notificationText}</p>
      </Container>
      <br></br>
    </div>
  )
};