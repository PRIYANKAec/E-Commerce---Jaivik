// LoginPage.js
import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import google from '../../src/images/google.png'

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    usernameOrPhone: '',
    password: '',
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', loginData);
  };

 
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={loginData.username}
            onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          />
        </label>
        <button type="submit">Login</button>
      </form>

      <div className='google'>
          <a href="https://accounts.google.com/v3/signin/identifier?ifkv=ASKXGp2lW8MDE8Bv75rBETfbzXYV7eifRjVWqvQP-6Ja-JHaA_Lu5Jafv4MODlqNnkGf1B5K51Ae1A&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-553357578%3A1700986622991928&theme=glif" className="google-login-link">
              <img src= {google} alt="google" className="google-logo" />Continue with Google
          </a>
      </div>


      <div className='create-new'>
        <Link to="/CreateAccountPage"> Create new account </Link>
      </div>
    </div>
  );
};

export default LoginPage;