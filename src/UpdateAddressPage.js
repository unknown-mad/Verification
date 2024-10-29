<<<<<<< HEAD
import React, { useState } from "react";
import Modal from "./Modal";
import './App.css'; // Ensure you have this CSS file for styling

const UpdateAddressPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState([]);

  const reasons = [
    "Moved to a new house",
    "Incorrect address previously entered",
    "Change of postal/zip code",
    "Other (please specify)"
  ];

  const handleReasonChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedReasons([...selectedReasons, value]);
    } else {
      setSelectedReasons(selectedReasons.filter((reason) => reason !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal on form submission
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="update-address-container">
      <h1>Update Address</h1>
      <form onSubmit={handleSubmit} className="update-address-form">
        <label htmlFor="address">New Address:</label>
        <input
          type="text"
          id="address"
          required
          className="address-input"
        />
        
        {/* Checkbox for reasons */}
        <div className="reasons-checkbox">
          <h3>Any specific reason for update:</h3>
          {reasons.map((reason, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`reason-${index}`}
                value={reason}
                onChange={handleReasonChange}
              />
              <label htmlFor={`reason-${index}`}>{reason}</label>
            </div>
          ))}
        </div>
        
        <button type="submit" className="submit-button">Update Address</button>
      </form>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Address Updated</h2>
        <p>Your address has been updated successfully.</p>
        <p>Selected reasons: {selectedReasons.join(", ")}</p>
        <button onClick={handleCloseModal} className="modal-close-button">Close</button>
      </Modal>
    </div>
  );
};

export default UpdateAddressPage;
=======
import React, { useState } from "react";
import Modal from "./Modal";
import './App.css'; // Ensure you have this CSS file for styling

const UpdateAddressPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState([]);

  const reasons = [
    "Moved to a new house",
    "Incorrect address previously entered",
    "Change of postal/zip code",
    "Other (please specify)"
  ];

  const handleReasonChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedReasons([...selectedReasons, value]);
    } else {
      setSelectedReasons(selectedReasons.filter((reason) => reason !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal on form submission
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="update-address-container">
      <h1>Update Address</h1>
      <form onSubmit={handleSubmit} className="update-address-form">
        <label htmlFor="address">New Address:</label>
        <input
          type="text"
          id="address"
          required
          className="address-input"
        />
        
        {/* Checkbox for reasons */}
        <div className="reasons-checkbox">
          <h3>Any specific reason for update:</h3>
          {reasons.map((reason, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`reason-${index}`}
                value={reason}
                onChange={handleReasonChange}
              />
              <label htmlFor={`reason-${index}`}>{reason}</label>
            </div>
          ))}
        </div>
        
        <button type="submit" className="submit-button">Update Address</button>
      </form>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Address Updated</h2>
        <p>Your address has been updated successfully.</p>
        <p>Selected reasons: {selectedReasons.join(", ")}</p>
        <button onClick={handleCloseModal} className="modal-close-button">Close</button>
      </Modal>
    </div>
  );
};

export default UpdateAddressPage;
>>>>>>> origin/main
