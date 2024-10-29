import React from "react";
import "./App.css"; // You can style the page using this CSS file
import { useNavigate } from "react-router-dom";

const InstructionPage = () => {
  // URLs to example images (can be static images hosted on your server)
  const navigate = useNavigate();
  const selfieExample = "https://via.placeholder.com/150?text=Selfie+Example";
  const uidExample = "https://via.placeholder.com/150?text=UID+Example";
  const uidExample2 = "https://via.placeholder.com/150?text=UID+Example";
  const panExample = "https://via.placeholder.com/150?text=PAN+Example";
  const houseExteriorExample = "https://via.placeholder.com/150?text=House+Exterior+Example";
  const handleButtonClick = () => {
    alert(`Thanks for Reading`);
    navigate('/DocUploadPage'); 
  };
  
  return (
    <div className="instruction-page-container">
      <h2>Document Upload Instructions</h2>
      <p>Please ensure that the following documents are clear and meet the criteria mentioned below.</p>

      {/* Instruction for Selfie */}
      <div className="instruction-section">
        <h3>1. Selfie</h3>
        <p>Ensure your selfie is taken in good lighting with your face clearly visible. No hats, sunglasses, or filters allowed.</p>
        <div className="example-image">
          <img src={selfieExample} alt="Selfie Example" />
        </div>
      </div>

      {/* Instruction for UID (Aadhaar Card) */}
      <div className="instruction-section">
        <h3>2. UID (Aadhaar Card)</h3>
        <p>Your Aadhaar Card should be legible and all details visible. Avoid glare or shadows on the card.</p>
        <div className="example-image">
          <img src={uidExample} alt="UID Example" />
          <img src={uidExample} alt="UID Example" />
        </div>
      </div>

      {/* Instruction for PAN Card */}
      <div className="instruction-section">
        <h3>3. PAN Card</h3>
        <p>Upload a clear image of your PAN Card. Ensure all details such as your name, PAN number, and photo are clearly visible.</p>
        <div className="example-image">
          <img src={panExample} alt="PAN Example" />
        </div>
      </div>

      {/* Instruction for House Exterior */}
      <div className="instruction-section">
        <h3>4. House Exterior</h3>
        <p>Take a clear picture of the front of your house. Ensure the entire exterior is visible and recognizable.</p>
        <div className="example-image">
          <img src={houseExteriorExample} alt="House Exterior Example" />
          <img src={houseExteriorExample} alt="House Exterior Example" />
          <img src={houseExteriorExample} alt="House Exterior Example" />           
        </div>
      </div>

      <div className="button-container">
        <button className="next-button" type="Button" onClick={handleButtonClick}>Proceed to Upload</button>
      </div>
    </div>
  );
};

export default InstructionPage;
