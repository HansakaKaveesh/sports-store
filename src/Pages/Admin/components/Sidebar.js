import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item active">Profile</li>
        <li className="menu-item">My Computer</li>
        <li className="menu-item">Order History</li>
        <li className="menu-item">Card Detail</li>
        <li className="menu-item">My Favorites</li>
        <li className="menu-item">Settings</li>
      </ul>
      <div className="cart-message">
        <p>There's a Product in your cart</p>
        <button className="cart-button">Check your cart</button>
      </div>
    </div>
  );
}

export default Sidebar;
