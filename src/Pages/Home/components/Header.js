import { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // State to manage fixed navbar on scroll

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll effect to change navbar to fixed position
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`naviba ${isFixed ? 'fixed' : ''}`}> {/* Apply 'fixed' class when scrolling */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/Picture1.png" alt="Othisi Logo" />
        </Link>
      </div>

      <div
        className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={toggleMobileMenu}
        role="button"
        aria-label="Toggle mobile menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li
          className="dropdown"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <span role="button" aria-haspopup="true" aria-expanded={dropdownOpen}>
          <a href="#">Product</a>
          </span>
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
        <li><Link to="/Signup">Signup</Link></li>
      </ul>

      <div className="cart-icon">
        <Link to="/Checkout" aria-label="Cart">
          🛒
        </Link>
      </div>
    </div>
  );
};

export default Header;
