import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Account from './pages/Account';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/login';
import CreateAccountPage from './pages/CreateAccountPage';

function App() {
   return (
    <div className="App">
      
      <Router>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/CreateAccountPage" element={<CreateAccountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
