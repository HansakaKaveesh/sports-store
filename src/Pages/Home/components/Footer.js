import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer>
      <div class="footer-container">
      <div class="footer-section">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
        <div class="footer-section">
        <h2>Quick Links</h2>
          <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
          </ul>
        </div>
      
      <div class="footer-section">
      <h2>Follow Us</h2>
      <div className="social-icons">
        <a href="#"><img src="/icon/Facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="/icon/Instergram.png" alt="Instagram" /></a>
        <a href="#"><img src="/icon/Twiter.png" alt="Twitter" /></a>
      </div>
      </div>  
      
      <div class="footer-section">
                <h2>Contact Us</h2>
                <p>Email: info@example.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Street Name, City, Country</p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2024 Your Website. All Rights Reserved.</p>
        </div> 
    </footer>
  );
}

export default Footer;