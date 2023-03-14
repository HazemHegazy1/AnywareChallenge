import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { login } from '../../reducers/reduxStore'
import './LoginPage.css';
import Logo from "../../assets/logo.png"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login());
    navigate('/search');

  };


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
         <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
          <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form>
      
    </div>
  );
}

export default LoginPage;
