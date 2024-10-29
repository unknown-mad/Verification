import React, { useState } from "react";
import './App.css'; // External CSS for styling
import { useNavigate } from "react-router-dom";

const MobileVerificationPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSendCode = () => {
    // Simulate sending a verification code
    console.log("Sending verification code to:", mobileNumber);
    setIsCodeSent(true);
  };

  const handleVerifyCode = () => {
    // Simulate verifying the code
    console.log("Verifying code:", verificationCode);
    if (verificationCode === "123456") { // Replace with actual verification logic
      setIsVerified(true);
      alert("Number Verified");
      navigate('/AddressPage'); // Redirect to AddressPage on success
    } else {
      setIsVerified(false);
      alert("Incorrect OTP");
    }
  };

  return (
    <div className="verification-container">
      <h1>Mobile Number Verification</h1>
      {!isCodeSent ? (
        <>
          <div className="input-group">
            <label htmlFor="mobile-number">Enter your mobile number:</label>
            <input
              id="mobile-number"
              type="tel"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              placeholder="e.g. +1234567890"
            />
          </div>
          <button className="verification-button" onClick={handleSendCode}>
            Send Verification Code
          </button>
        </>
      ) : !isVerified ? (
        <>
          <div className="input-group">
            <label htmlFor="verification-code">Enter the verification code:</label>
            <input
              id="verification-code"
              type="text"
              value={verificationCode}
              onChange={handleVerificationCodeChange}
              placeholder="e.g. 123456"
            />
          </div>
          <button className="verification-button" onClick={handleVerifyCode}>
            Verify Code
          </button>
        </>
      ) : (
        <p>Your mobile number has been verified successfully!</p>
      )}
    </div>
  );
};

export default MobileVerificationPage;
