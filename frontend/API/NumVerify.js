import React, { useState } from 'react';

const PhoneNumberVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleVerificationClick = () => {
    const API_KEY = 'your_api_key';

    fetch(`http://apilayer.net/api/validate?access_key=${API_KEY}&number=${phoneNumber}`)
      .then(response => response.json())
      .then(data => {
        setVerificationResult(data);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <label htmlFor="phone-number-input">Enter phone number:</label>
      <input type="text" id="phone-number-input" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <button onClick={handleVerificationClick}>Verify</button>
      {verificationResult && (
        <div>
          <p>Phone number: {verificationResult.number}</p>
          <p>Country code: {verificationResult.country_code}</p>
          <p>Valid: {verificationResult.valid ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default PhoneNumberVerification;
