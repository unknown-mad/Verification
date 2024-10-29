import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom"; 

const StayCalculationPage = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState(""); // Automatically set to today's date
  const [stayDuration, setStayDuration] = useState({ years: 0, months: 0, days: 0 });
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleButtonClick = () => {
    navigate('/BasicDetails');  // Navigate to 'NextPage' on button click
  };

  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Set today's date as default for check-out when the component mounts
  useEffect(() => {
    setCheckOutDate(getTodayDate());
  }, []);

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
    calculateStay(e.target.value, checkOutDate);
  };

//   const handleCheckOutChange = (e) => {
//     setCheckOutDate(e.target.value);
//     calculateStay(checkInDate, e.target.value);
//   };

  const calculateStay = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
    //   const checkOutDate = new Date(checkOut);

      if (checkOutDate >= checkInDate) {
        let years = checkOutDate.getFullYear() - checkInDate.getFullYear();
        let months = checkOutDate.getMonth() - checkInDate.getMonth();
        let days = checkOutDate.getDate() - checkInDate.getDate();

        if (days < 0) {
          months--;
          days += new Date(checkOutDate.getFullYear(), checkOutDate.getMonth(), 0).getDate(); // Days in previous month
        }

        if (months < 0) {
          years--;
          months += 12;
        }

        setStayDuration({ years, months, days });
      } else {
        // alert("Check-out date must be after the check-in date.");
        setStayDuration({ years: 0, months: 0, days: 0 });
      }
    }
  };

  return (
    <>
      <div className="stay-calculation-container">
        <h1>Stay Since</h1>

        <div className="input-group">
          {/* <label htmlFor="checkInDate">Check-In Date:</label> */}
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={handleCheckInChange}
          />
        </div>

        {stayDuration.years > 0 || stayDuration.months > 0 || stayDuration.days > 0 ? (
          <div className="result">
            <h2>Total Stay Duration:</h2>
            <p>{stayDuration.years} years, {stayDuration.months} months, and {stayDuration.days} days</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      {/* Button to navigate to 'NextPage' */}
      <button className="verification-button" onClick={handleButtonClick}>
       Confirm
      </button>
    </>
  );
};

export default StayCalculationPage;
