import React ,{ useState } from 'react';
import { Link } from 'react-router-dom';
import jaiviklogo from '../../src/images/jaiviklogo..png';
import './cart.css';
import banana from '../../src/images/banana.png';

  
const Cart = () => {
 
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
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
        
         <div className='cartpage'>
          <h3>My Shopping List</h3>
          <hr style={{ backgroundColor: 'black', height: '3px', border: 'none' }}></hr>
        <div className='columns'>Product</div>
        <div className='columns'>Info</div>
        <div className='columns'>Quantity</div>
        <div className='columns'>Payment</div>
        <br></br>
        <hr style={{ backgroundColor: 'black', height: '2px', border: 'none' }}></hr>
        </div>
        
        <br></br>
 <div className='addtolist'>
          <div className='added-product' >
                   <div className='product-image'  style={{ width: '200px', height: '10%', overflow: 'hidden' }}> 
                          <img src={banana} alt="product" style={{ width: '150px', height: '100%', objectFit: 'cover' }} />
                    </div>
                   <div className='product-details'>
                        <ul className='unorder'>
                          <li>Robusta</li>
                          <li><span>&#8377;</span>90/kg</li>
                        </ul>
                    </div>
                   <div className='product-quantity'>
                            <button  className='inc-dec' onClick={handleDecrement}>  -  </button>
                            <span className='quantity'>{quantity}</span>
                            <button  className='inc-dec' onClick={handleIncrement}> + </button>
                   </div>
          </div>
          <div className='checkout' >
            <button className='payment'>Click To Pay</button>
          </div>
          
  </div>
        
    
         
    </div>
  );
};

export default Cart;