<<<<<<< HEAD
import React from 'react';
import './App.css'
import { useNavigate } from "react-router-dom";

const TermsPage = () => {
  const navigate = useNavigate();
     const handleButtonClick = () => {
        // Handle button click event
        alert('Thanks For Acceptance!');
        navigate('/MobilePage')
      };
  return (
    <>
   
    <div ClassName="hi-container">
        <h11>Hi,There</h11><br></br>
        <h22>We perform digital verification of your address </h22>
    </div>
    <div className="terms-container">
      <h1>Terms and Conditions</h1>

      <p>Welcome to [Website Name]! These Terms and Conditions outline the rules and regulations for the use of [Website Name]’s website, located at [Website URL].</p>

      <h2>1. Introduction</h2>
      <p>
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Website Name] if you do not agree to all of the terms and conditions stated on this page.
      </p>

      <h2>2. Changes to the Terms</h2>
      <p>
        We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon being posted on this website. It is your responsibility to review these terms periodically to ensure you are aware of any changes.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be at least 18 years old to use this website or have parental or guardian consent. By using this website, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and Conditions.
      </p>

      <h2>4. User Accounts</h2>
      <p>
        If you create an account on our website, you must provide accurate and complete information. You are responsible for maintaining the security of your account and any activities or actions under your account.
      </p>

      <h2>5. Use of the Website</h2>
      <p>
        You agree not to use the website for any unlawful purposes. You agree not to:
      </p>
      <ul>
        <li>Upload or transmit any harmful or malicious content.</li>
        <li>Violate any applicable local, state, national, or international laws or regulations.</li>
        <li>Interfere with or disrupt the website's functionality or servers.</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        All content, design, and intellectual property on the website are owned by [Website Name] or licensed to us. Unauthorized reproduction of the content is prohibited.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the content or policies of third-party sites. Accessing such websites is at your own risk.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, [Website Name] shall not be liable for any damages arising out of your use of our website.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These terms will be governed by and interpreted in accordance with the laws of [State/Country], and you submit to the exclusive jurisdiction of the courts located in [State/Country] for the resolution of any disputes.
      </p>

      <p>If you have any questions about these Terms and Conditions, please contact us at [Email Address].</p>
    
    </div>
    <div class="Termsbutton-container">
    <button className="terms-button" onClick={handleButtonClick}>
        Agree and Continue
      </button>
      </div>
    </>
  );
};

export default TermsPage;
=======
import React from 'react';
import './App.css'
import { useNavigate } from "react-router-dom";

const TermsPage = () => {
  const navigate = useNavigate();
     const handleButtonClick = () => {
        // Handle button click event
        alert('Thanks For Acceptance!');
        navigate('/MobilePage')
      };
  return (
    <>
   
    <div ClassName="hi-container">
        <h11>Hi,There</h11><br></br>
        <h22>We perform digital verification of your address </h22>
    </div>
    <div className="terms-container">
      <h1>Terms and Conditions</h1>

      <p>Welcome to [Website Name]! These Terms and Conditions outline the rules and regulations for the use of [Website Name]’s website, located at [Website URL].</p>

      <h2>1. Introduction</h2>
      <p>
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use [Website Name] if you do not agree to all of the terms and conditions stated on this page.
      </p>

      <h2>2. Changes to the Terms</h2>
      <p>
        We reserve the right to update or modify these terms at any time. Changes will be effective immediately upon being posted on this website. It is your responsibility to review these terms periodically to ensure you are aware of any changes.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be at least 18 years old to use this website or have parental or guardian consent. By using this website, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and Conditions.
      </p>

      <h2>4. User Accounts</h2>
      <p>
        If you create an account on our website, you must provide accurate and complete information. You are responsible for maintaining the security of your account and any activities or actions under your account.
      </p>

      <h2>5. Use of the Website</h2>
      <p>
        You agree not to use the website for any unlawful purposes. You agree not to:
      </p>
      <ul>
        <li>Upload or transmit any harmful or malicious content.</li>
        <li>Violate any applicable local, state, national, or international laws or regulations.</li>
        <li>Interfere with or disrupt the website's functionality or servers.</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        All content, design, and intellectual property on the website are owned by [Website Name] or licensed to us. Unauthorized reproduction of the content is prohibited.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party websites. We are not responsible for the content or policies of third-party sites. Accessing such websites is at your own risk.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, [Website Name] shall not be liable for any damages arising out of your use of our website.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These terms will be governed by and interpreted in accordance with the laws of [State/Country], and you submit to the exclusive jurisdiction of the courts located in [State/Country] for the resolution of any disputes.
      </p>

      <p>If you have any questions about these Terms and Conditions, please contact us at [Email Address].</p>
    
    </div>
    <div class="Termsbutton-container">
    <button className="terms-button" onClick={handleButtonClick}>
        Agree and Continue
      </button>
      </div>
    </>
  );
};

export default TermsPage;
>>>>>>> origin/main
