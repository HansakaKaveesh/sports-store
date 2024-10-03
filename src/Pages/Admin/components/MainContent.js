import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content-area">
      <div className="component-cards">
        <div className="card cpu">You need a headquarters for your computer</div>
        <div className="card gpu">Here is the Graphic department</div>
        <div className="card motherboard">Foundation is important for computers</div>
        <div className="card ram">Put your digit to the warehouse</div>
      </div>

      <div className="history-review">
        <div className="browsing-history">
          <h2>Browsing History</h2>
          <ul>
            <li>AMD Ryzen 5 3600</li>
            <li>NVIDIA GeForce RTX 3080</li>
            <li>Kingston Hyper-X Impact</li>
          </ul>
        </div>

        <div className="user-review">
          <h2>Your Review</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>

      <div className="profile-sidebar">
        <div className="user-info">
          <p className="name">Mr. Taylon</p>
          <p className="email">taylon2447@brickmail.com</p>
        </div>
        <div className="user-stats">
          <p>Browsed items: <strong>2380</strong></p>
          <p>Order count: <strong>32</strong></p>
          <p>Loved items: <strong>127</strong></p>
          <p>Reviewed: <strong>29</strong></p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
