import React, { useState } from 'react';
import './Header.css'; // or use CSS-in-JS

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header">
      <img
        src="/heder.jpg"
        alt="Sports Header Background"
      />
      <div className="logo-content">
        <img
          src="/Picture1.png"
          alt="Othisi Logo"
        />
      </div>

      <div className="navbar">
        <div className="navbar-logo">
          <img
            src="/Picture1.png"
            alt="Othisi Logo"
          />
        </div>
        <div className="navbar-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li 
              className="dropdown"
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <a href="#">Product</a>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">T-Shirts</a></li>
                  <li><a href="#">Cricket</a></li>
                  <li><a href="#">Rugby</a></li>
    
                </ul>
              )}
            </li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
        <div className="cart-icon">🛒</div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Hinted search text" />
        <button>🔍</button>
      </div>
    </div>
  );
};

export default Header;
