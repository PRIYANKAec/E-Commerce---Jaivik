// Import necessary dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../src/images/arrow.png'
import addprofile from '../../src/images/addprofile.png';
import './account.css';
import jaiviklogo from '../../src/images/jaiviklogo..png';

const Account = () => {
  const [profileImage, setProfileImage] = useState({
    file: null,
    url: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setProfileImage({ file, url });
  };

  return (
    <div>
      <header className="header">
       <div className='product-name'>
          <img src={jaiviklogo} alt="jaiviklLogo" className='logo' />
          <h1>Jaivik Vaazhai</h1>
          </div>
          <nav>
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Account">Account</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/Cart">Cart</Link></li>
            </ul>
            </nav>
            <div className='signin'>
            <ul className="nav-list">
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/CreateAccountPage">Sign up</Link></li>
            </ul>
            </div>
        </header>

      <h1 className='title'>My Account</h1>
      <div className='user-details'>
        <label htmlFor="profileImageInput">
          {profileImage.url ? (
            <img src={profileImage.url} alt="profile" className='uploaded-image' />
          ) : (
            <img src={addprofile} alt="addprofile" className='usericon' />
          )}
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </label>
        <div className='user-info'>
          <h2 className='h2'> Nandhini S </h2>
          <h2 className='h3'> 9514392076 </h2>
        </div>
        <div className="account-buttons">
          <Link to="/my-orders" className="account-button1">
            My Orders
            <img src={arrow} alt="arrow" className="arrow-image1" />
          </Link>
          <Link to="/your-details" className="account-button2">
            Your Details
            <img src={arrow} alt="arrow" className="arrow-image2" />
          </Link>
          <Link to="/cart" className="account-button3">
            Cart
            <img src={arrow} alt="arrow" className="arrow-image3" />
          </Link>
          <Link to="/settings" className="account-button4">
            Settings
            <img src={arrow} alt="arrow" className="arrow-image4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
