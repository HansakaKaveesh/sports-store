import React, { useState } from 'react';
import './Header.css'; // or use CSS-in-JS
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      
      <img
        src="/bacgroun.png"
        alt="Sports Header Background"
      />
      

      <div className="navba">
        <div className="navbar-logo">
          <img
            src="/Picture1.png"
            alt="Othisi Logo"
          />
        </div>
        <div className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="#">Product</a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/Tshirts">T-Shirts</Link></li>
                <li><Link to="/Cricket">Cricket</Link></li>
                <li><Link to="/Rugby">Rugby</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
        
        <div className="cart-icon"><Link to="/Checkout">🛒</Link></div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Hinted search text" />
        <button>🔍</button>
      </div>
    </div>
  );
};

export default Header;
