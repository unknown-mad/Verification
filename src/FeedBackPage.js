import React, { useState } from "react";
import './App.css'; // Import your CSS file for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    income: "",
    familyIncome: "",
    runningLoanRepayment: "",
    employmentType: "",
    monthlyHouseholdExpenditure: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    console.log("Feedback submitted:", formData);
    setFormSubmitted(true);
  };

  return (
    <div className="feedback-form-container">
      <h2>Thank You</h2>
      {formSubmitted ? (
        <p className="feedback-success">Verifcation Completed</p>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          
          
          
          <div className="form-group">
            <label htmlFor="income">Monthly Income:</label>
            <input
              type="number"
              id="income"
              name="income"
              value={formData.income}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="familyIncome">Family Income:</label>
            <input
              type="number"
              id="familyIncome"
              name="familyIncome"
              value={formData.familyIncome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="runningLoanRepayment">Monthly Running Loan Repayment:</label>
            <input
              type="number"
              id="runningLoanRepayment"
              name="runningLoanRepayment"
              value={formData.runningLoanRepayment}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="employmentType">Employment Type:</label>
            <select
              id="employmentType"
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
            >
              <option value="">Select Employment Type</option>
              <option value="Salaried">Salaried</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Unemployed">Unemployed</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="monthlyHouseholdExpenditure">Monthly Household Expenditure:</label>
            <input
              type="number"
              id="monthlyHouseholdExpenditure"
              name="monthlyHouseholdExpenditure"
              value={formData.monthlyHouseholdExpenditure}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
            />
            </div>
          <button type="submit" className="submit-button">Submit</button>
          
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
