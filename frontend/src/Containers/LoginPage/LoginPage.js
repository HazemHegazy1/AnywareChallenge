import React, { useState } from 'react';

import './LoginPage.css';
import BlueArt from "../../assets/LoginBlueIllustration.png";
import Logo from "../../assets/logo.png"
function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', username, password);
  }

  return (
    <div className="login-container">
        
        <img alt="." src={Logo} className="login_Logo"/>
        <div className ="BlueContent">
        <h3>Nice to see you again</h3>
        <h1>WELCOME BACK</h1>
        </div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default LoginPage;
