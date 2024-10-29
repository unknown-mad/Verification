<<<<<<< HEAD
import React, { useState } from "react";
import "./App.css"; // You can style the form using this CSS file
import { useNavigate } from "react-router-dom";

const BasicDetailForm = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();  
  // Pre-existing photo URL (this could be fetched from a server or static)
  const photoUrl = "https://via.placeholder.com/150"; // Replace with actual photo URL

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation logic here
    if (!name || !mobileNumber || !dob) {
      alert("Please fill all the fields.");
      navigate('/Instruction')
    }

    // Form data can be sent to backend via API call
    const formData = {
      name,
      mobileNumber,
      dob,
    };

    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Basic Detail Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        {/* Photo View Section */}
        <div className="photo-section">
          <h3>Photo </h3>
          <img src={photoUrl} alt="Profile" className="profile-photo" />
        </div>

        <button type="submit" className="submit-button">Start Verification</button>
      </form>
    </div>
  );
};

export default BasicDetailForm;
=======
import React, { useState } from "react";
import "./App.css"; // You can style the form using this CSS file
import { useNavigate } from "react-router-dom";

const BasicDetailForm = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();  
  // Pre-existing photo URL (this could be fetched from a server or static)
  const photoUrl = "https://via.placeholder.com/150"; // Replace with actual photo URL

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation logic here
    if (!name || !mobileNumber || !dob) {
      alert("Please fill all the fields.");
      navigate('/Instruction')
    }

    // Form data can be sent to backend via API call
    const formData = {
      name,
      mobileNumber,
      dob,
    };

    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Basic Detail Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter your mobile number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        {/* Photo View Section */}
        <div className="photo-section">
          <h3>Photo </h3>
          <img src={photoUrl} alt="Profile" className="profile-photo" />
        </div>

        <button type="submit" className="submit-button">Start Verification</button>
      </form>
    </div>
  );
};

export default BasicDetailForm;
>>>>>>> origin/main
