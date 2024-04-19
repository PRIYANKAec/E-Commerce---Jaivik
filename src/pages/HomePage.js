import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import jaiviklogo from '../../src/images/jaiviklogo..png';
import search from '../../src/images/search-icon.png';
import screen1 from '../../src/images/screen.png';
import screen2 from '../../src/images/screen1.png';
import screen3 from '../../src/images/screen2.png';
import gpay from '../../src/images/gpay.png';
import visa from '../../src/images/visa.png';
import rupay from '../../src/images/rupay.png';
import paytm from '../../src/images/paytm.png';
import insta from '../../src/images/instagram.png';
import fb from '../../src/images/facebook.png';
import whatsapp from '../../src/images/whatsapp.png';
import twitter from '../../src/images/twitter.png';
import call from '../../src/images/call.png';
import email from '../../src/images/email.png';
import { Link } from 'react-router-dom';
import './home.css';
import CreateAccountPage from './CreateAccountPage';
import './Cart.js';


function HomePage() {
  const products = [
    { id: 1, name: 'Red Banana',  rate: '₹50/kg', image: 'https://www.thespruceeats.com/thmb/FO6XsB7fYCfClhzM8AvGm9GVXJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Red-Bananas-578fd3695f9b584d2059049f.jpg' },
    { id: 2, name: 'Karpuravalli',rate: '₹40/kg', image: 'https://www.thespruceeats.com/thmb/FO6XsB7fYCfClhzM8AvGm9GVXJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Red-Bananas-578fd3695f9b584d2059049f.jpg' },
    { id: 3, name: 'mysore',      rate: '₹60/kg', image: 'https://www.thespruceeats.com/thmb/FO6XsB7fYCfClhzM8AvGm9GVXJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Red-Bananas-578fd3695f9b584d2059049f.jpg' },
    { id: 4, name: 'Robusta',     rate: '₹90/kg', image: 'https://www.thespruceeats.com/thmb/FO6XsB7fYCfClhzM8AvGm9GVXJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Red-Bananas-578fd3695f9b584d2059049f.jpg' },
    { id: 5, name: 'Poovan',      rate: '₹20/kg', image: 'https://www.thespruceeats.com/thmb/FO6XsB7fYCfClhzM8AvGm9GVXJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Red-Bananas-578fd3695f9b584d2059049f.jpg' },
    { id: 6, name: 'Rasthali',    rate: '55/kg', image: 'https://www.thespruceeats.com/thmb/FO6XsB7fYCfClhzM8AvGm9GVXJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Red-Bananas-578fd3695f9b584d2059049f.jpg' },
    { id: 7, name: 'Monthan',     rate: '150/kg', image: 'https://www.thespruceeats.com/thmb/FO6XsB7fYCfClhzM8AvGm9GVXJM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Red-Bananas-578fd3695f9b584d2059049f.jpg' },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
  };
  
  
  return (
    <div  className="App">
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
            <li><Link to="login">Log in</Link></li>
            <li><Link to="/CreateAccountPage">Sign up</Link></li>
            </ul>
            </div>
        </header>

        <div className="search-box">
    <input type="text" placeholder="Search..."/>
    <button>
      <img  src={search} alt="Search icon"/>
    </button>
  </div>
  
  <Slider {...sliderSettings} className="carousel">
        <div>
          <img src={screen1} alt="Screen 1" />
        </div>
        <div>
          <img src={screen2} alt="Screen 2" />
        </div>
        <div>
          <img src={screen3} alt="Screen 3" />
        </div>
  </Slider>

        <section className="products">
        <div className="product-title">Organic Bananas</div>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.rate}</p>
              <button className="button-36" onClick={('handleAddToCart'(product.id))}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className='footer-page'>
        <div className='payment-title'>Payment Methods</div>
          <div className='payment-div'>
            <ul className="nav-list">
              <li><img src={gpay} className="payment"/></li>
              <li><img src={paytm} className="payment"/></li>
              <li><img src={visa} className="payment"/></li>
              <li><img src={rupay} className="payment"/></li>
            </ul>
          </div>
          <div className='follow-top'>
          <div className='follow-title'>Follow us</div>
          <div className='follow-div'>
            <ul className="nav-list">
              <li><img src={whatsapp} className="follow"/></li>
              <li><img src={insta} className="follow"/></li>
              <li><img src={fb} className="follow"/></li>
              <li><img src={twitter} className="follow"/></li>
            </ul>
          </div>
          </div>
        </div>
        <div className="footer-line"></div>

        <div className="parent-container">
        <div className='footer-box'>
        <div className='contact-title'>Contact us</div>
          <div className='contact-div'>
            <ul className="nav-list">
              <li><img src={call} className="img"/>
              <div className='contact'>+91 95143 92076</div>
              </li>
              <li><img src={email} className="imag"/>
              <div className='contact'>JaivikVaazhai@gmail.com</div>
              </li>
            </ul>
          </div>
          </div>
          
          <div className='about-box'>
          <div className='about-title'>About us</div>
          <div className='about-div'> 16,Thattan thottam main street,<br></br>
           Palladam road, Tiruppur-641604 </div>
          </div>

          <div className='feedback-box'>
          <div className='feedback-title'>Subscribe for more info</div>
          <div className="feed-box">
            <input type="text" placeholder="Enter E-mail ID..."/>
          </div>
          <div className='feedback-div'></div>
          </div>
      </div>
      </footer>
</div>
  );
};

export default HomePage;