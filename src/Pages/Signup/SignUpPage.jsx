import React, { useState } from 'react';
import axios from 'axios';
import './SignUpPage.css'; // Your CSS file
import { useNavigate } from 'react-router-dom'; // Navigation to login
import Navbar from '../LoginPage/Header';

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate between routes

  const validatePassword = (password, name, username) => {
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }
    if (password.includes(name) || password.includes(username)) {
      alert('Password cannot contain your name or username');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(password, name, username)) {
      return; 
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        username,
        email,
        password,
      });
      
      alert('Signup successful! You can now login.');
      
      // Redirect the user to the login page after successful signup
      navigate('/login');
    } catch (error) {
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div>
      <Navbar/>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-title">Signup</h2>
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="signup-button">Signup</button>
        <button type="button" className="back-button" onClick={() => navigate('/login')}>
          Back to Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
