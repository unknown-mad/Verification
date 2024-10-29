import React, { useState } from "react";
import "./App.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";
const DocUploadPage = () => {
  const [selfie, setSelfie] = useState(null);
  const [panCard, setPanCard] = useState(null);
  const [aadharFront, setAadharFront] = useState(null);
  const [aadharBack, setAadharBack] = useState(null);
  const [housePhotos, setHousePhotos] = useState([null, null, null]);
  const navigate = useNavigate();
  // Handle file changes and update state
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (index === "selfie") setSelfie(file);
    else if (index === "pan") setPanCard(file);
    else if (index === "aadharFront") setAadharFront(file);
    else if (index === "aadharBack") setAadharBack(file);
    else {
      const updatedHousePhotos = [...housePhotos];
      updatedHousePhotos[index] = file;
      setHousePhotos(updatedHousePhotos);
    }
  };

  // Handle file re-upload
  const handleReupload = (index) => {
    if (index === "selfie") setSelfie(null);
    else if (index === "pan") setPanCard(null);
    else if (index === "aadharFront") setAadharFront(null);
    else if (index === "aadharBack") setAadharBack(null);
    else {
      const updatedHousePhotos = [...housePhotos];
      updatedHousePhotos[index] = null;
      setHousePhotos(updatedHousePhotos);
    }
  };

  // Function to preview the uploaded file
  const previewFile = (file) => {
    return file ? URL.createObjectURL(file) : null;
  };

  // Handle form submission (could include backend logic)
  const handleSubmit = () => {
    alert("Documents uploaded successfully!");
    navigate('/Map')
  };


  return (
    <div className="doc-upload-container">
      <h2>Document Upload</h2>
      <p>Please upload the following documents to proceed.</p>

      {/* Selfie Upload with Preview and Reupload */}
      <div className="upload-section">
        <h3>Selfie</h3>
        {!selfie && (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "selfie")}
          />
        )}
        {selfie && (
          <div className="preview">
            <img src={previewFile(selfie)} alt="Selfie Preview" />
            <button
              className="reupload-button"
              onClick={() => handleReupload("selfie")}
            >
              Reupload
            </button>
          </div>
        )}
      </div>

      {/* PAN Card Upload with Preview and Reupload */}
      <div className="upload-section">
        <h3>PAN Card</h3>
        {!panCard && (
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "pan")}
          />
        )}
        {panCard && (
          <div className="preview">
            <img src={previewFile(panCard)} alt="PAN Card Preview" />
            <button
              className="reupload-button"
              onClick={() => handleReupload("pan")}
            >
              Reupload
            </button>
          </div>
        )}
      </div>

      {/* Aadhaar Front and Back Upload with Preview and Reupload */}
      <div className="upload-section">
        <h3>Aadhaar Card</h3>
        <div>
          <p>Front</p>
          {!aadharFront && (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "aadharFront")}
            />
          )}
          {aadharFront && (
            <div className="preview">
              <img src={previewFile(aadharFront)} alt="Aadhaar Front Preview" />
              <button
                className="reupload-button"
                onClick={() => handleReupload("aadharFront")}
              >
                Reupload
              </button>
            </div>
          )}
        </div>
        <div>
          <p>Back</p>
          {!aadharBack && (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, "aadharBack")}
            />
          )}
          {aadharBack && (
            <div className="preview">
              <img src={previewFile(aadharBack)} alt="Aadhaar Back Preview" />
              <button
                className="reupload-button"
                onClick={() => handleReupload("aadharBack")}
              >
                Reupload
              </button>
            </div>
          )}
        </div>
      </div>

      {/* House Exterior Photos Upload with Preview and Reupload */}
      <div className="upload-section">
        <h3>House Exterior (3 Photos)</h3>
        {housePhotos.map((photo, index) => (
          <div key={index}>
            {!photo && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, index)}
              />
            )}
            {photo && (
              <div className="preview">
                <img src={previewFile(photo)} alt={`House Photo ${index + 1} Preview`} />
                <button
                  className="reupload-button"
                  onClick={() => handleReupload(index)}
                >
                  Reupload
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <button className="submit-button" onClick={handleSubmit}>
        Upload Documents
      </button>
    </div>
  );
};

export default DocUploadPage;
