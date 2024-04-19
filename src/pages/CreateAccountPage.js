import React, { useState } from 'react';
import './CreateAccount.css'
import { Link } from 'react-router-dom';
import google from '../../src/images/google.png'

const CreateAccountPage = () => {
  const [accountData, setAccountData] = useState({
    name: '',
    phoneNumber: '',
    password: '',
    userType: 'user',
  });

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    console.log('Creating account with:', accountData);
  };

  return (
    <div className="create-account-container">
      <h1>Create New Account</h1>
      <form onSubmit={handleCreateAccountSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={accountData.name}
            onChange={(e) => setAccountData({ ...accountData, name: e.target.value })}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            value={accountData.phoneNumber}
            onChange={(e) => setAccountData({ ...accountData, phoneNumber: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={accountData.password}
            onChange={(e) => setAccountData({ ...accountData, password: e.target.value })}
          />
        </label>
        <button type="submit">Create Account</button>
      </form>

      <div className='google'>
      <a href="https://accounts.google.com/v3/signin/identifier?ifkv=ASKXGp2lW8MDE8Bv75rBETfbzXYV7eifRjVWqvQP-6Ja-JHaA_Lu5Jafv4MODlqNnkGf1B5K51Ae1A&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-553357578%3A1700986622991928&theme=glif" className="google-login-link">
  <img src={google} alt="google" className="google-logo" />Continue with Google
</a>
      </div>

      <div className='login'>Already have a account
        <Link to="/login"> Login</Link>
      </div>
    </div>
  );
};

export default CreateAccountPage;
