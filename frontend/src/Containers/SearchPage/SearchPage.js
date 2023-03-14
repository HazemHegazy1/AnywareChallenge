import React, { useState } from 'react';
import requireAuth from '../../HOC/requireAuth';
import './SearchPage.css'
import Logo from "../../assets/logo.png"
import Navbar from '../../Components/NavBar/Navbar';

const SearchPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleVerificationClick =  async () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "RWaBTbDTPXktxRyHSvsFxrKhxsmwwgT6");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    const data = await fetch(`https://api.apilayer.com/number_verification/validate?number=${phoneNumber}`, requestOptions)
        .catch(error => alert('error', error));
        const verResult = await data.json();
        setVerificationResult(verResult);
      
      const historyItem = {
        number: phoneNumber,
        result: data,
        date: new Date(),
      };
      const history = JSON.parse(localStorage.getItem('phoneVerificationHistory')) || [];
      history.push(historyItem);
      localStorage.setItem('phoneVerificationHistory', JSON.stringify(history));
    }
  return (
    <div className="SearchPage">

      <Navbar items={["Search","History"]} nav={["/Search","/History"]}/>
      
      <div className="SearchPage_Input">
        <h1>Verify any phone number </h1>
        <h3>Please enter your country code followed by phone number :</h3>
        <input type="text" id="phone-number-input" value={phoneNumber} placeholder="Enter Phone Number " onChange={handlePhoneNumberChange} />
        <button onClick={handleVerificationClick}>Verify</button>
        {verificationResult && (
          <div className='flexRow'>
            <div className='SearchPage_PhoneData1' >
            <p>Number: {verificationResult.number}</p>
            <p>Local Format: {verificationResult.local_format}</p>
            <p>International Format: {verificationResult.international_format}</p>
            <p>Country Prefix: {verificationResult.country_prefix}</p>
            <p>Country Code: {verificationResult.country_code}</p>
              </div>
              <div className='SearchPage_PhoneData2' >
            <p>Country Name: {verificationResult.country_name}</p>
            <p>Location: {verificationResult.location}</p>
            <p>Carrier: {verificationResult.carrier}</p>
            <p>Line Type: {verificationResult.line_type}</p>
            <p>Valid : {verificationResult.valid}</p>
                </div>
          </div>
        )}
      </div>
          
    </div>
  );
};


export default requireAuth(SearchPage);
