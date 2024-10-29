<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom"; 
import './App.css'; // Ensure CSS file is correctly linked

const AddressPage = () => { 
  const navigate = useNavigate();
  const handleResponse = (response) => {
    if (response) {
      
      navigate('/TimePeriodPage'); 
    } else {
     
      navigate('/UpdateAddressPage'); 
    }
  };

  return (
    <div className="verification-container">
      <h1>Address Verification</h1>
      <p>We have detected the following address:</p>
      <div className="address-box">
        <p className="address">1234 Elm Street, Springfield, IL</p>
      </div>
      <p>Is this your Current Address ?</p>
      <div className="button-group">
        <button className="verification-button" onClick={() => handleResponse(true)}>
          Yes
        </button>
        <button className="verification-button" onClick={() => handleResponse(false)}>
          No
        </button>
      </div>
    </div>
  );
};

export default AddressPage;
=======
import React from "react";
import { useNavigate } from "react-router-dom"; 
import './App.css'; // Ensure CSS file is correctly linked

const AddressPage = () => { 
  const navigate = useNavigate();
  const handleResponse = (response) => {
    if (response) {
      
      navigate('/TimePeriodPage'); 
    } else {
     
      navigate('/UpdateAddressPage'); 
    }
  };

  return (
    <div className="verification-container">
      <h1>Address Verification</h1>
      <p>We have detected the following address:</p>
      <div className="address-box">
        <p className="address">1234 Elm Street, Springfield, IL</p>
      </div>
      <p>Is this your Current Address ?</p>
      <div className="button-group">
        <button className="verification-button" onClick={() => handleResponse(true)}>
          Yes
        </button>
        <button className="verification-button" onClick={() => handleResponse(false)}>
          No
        </button>
      </div>
    </div>
  );
};

export default AddressPage;
>>>>>>> origin/main
