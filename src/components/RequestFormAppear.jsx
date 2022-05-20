import React, { useState } from "react";
import RequestForm from "./RequestForm.jsx";

export default function RequestFormAppear({loggedIn, userData}) {
  console.log(`loggedIn: ${loggedIn}`);
  console.log('printing userData...');
  console.log(userData.type);

  let isPartnerManager = true;
  if (userData.type === 'referring employee'){
    isPartnerManager = false;
    console.log(`isPartnerManager: ${isPartnerManager}`);
  } else {
    console.log(`isPartnerManager: ${isPartnerManager}`);
  }

  return (
    <div>
      <h1>Request Form</h1>
      {!isPartnerManager && (
        <RequestForm />
        )
      }
    </div>
  );
}