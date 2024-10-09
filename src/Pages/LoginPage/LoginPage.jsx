import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Import your CSS file
import Navbar from '../LoginPage/Header';
import Footer from '../Home/components/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      alert(response.data);
      // If login is successful, navigate to the dashboard
      if (response.status === 200) {
        navigate('/Admin'); // Redirect to the dashboard
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div>
    <Navbar/>
    <form onSubmit={handleSubmit} className="login-form">
      <h2 className="login-title">Login</h2>
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
        <label className="form-label">Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
        />
        <div className="show-password">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="show-password-checkbox"
          />
          <label className="show-password-label">Show Password</label>
        </div>
      </div>
      <button type="submit" className="login-button">Login</button>
    </form>
    
    </div>
  );
};

export default Login;
