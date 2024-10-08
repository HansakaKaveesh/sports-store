import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-pic"
        />
        <div className="profile-details">
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-email">johndoe@example.com</p>
        </div>
      </div>
      <div className="profile-body">
        <p className="welcome-text">Welcome back! Check your recent activity.</p>
        <ul className="profile-info">
          <li><strong>Location:</strong> New York, USA</li>
          <li><strong>Member Since:</strong> January 2022</li>
          <li><strong>Recent Activity:</strong> Logged in 2 hours ago</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
