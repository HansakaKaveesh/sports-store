import React, { useState } from 'react';
import './Header.css'; // or use CSS-in-JS
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div >
     <div className="navbar">
        <div className="navbar-logo">
          <img
            src="/Picture1.png"
            alt="Othisi Logo"
          />
        </div>
        <div className="navbar-links">
          <ul>
            <li><a> <Link to="/">Home</Link></a></li>
            <li 
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="#">Product</a>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a> <Link to="/Tshirts">T-Shirts</Link></a></li>
                  <li><a> <Link to="/Cricket">Cricket</Link></a></li>
                  <li><a> <Link to="/Rugby">Rugby</Link></a></li>
                </ul>
              )}
            </li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><a><Link to="/Login">Login</Link></a></li>
          </ul>
        </div>
        <div className="cart-icon"><Link to="/Checkout">🛒</Link></div>
      </div>

    
    </div>
  );
};

export default Header;
