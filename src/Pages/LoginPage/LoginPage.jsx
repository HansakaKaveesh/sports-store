import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Link the CSS file
import Header from './Header';
import Footer from '../Contact/Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <Header/>
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Username:</label>
          <input 
            type="text" 
            className="form-input"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <div className="password-container">
            <input 
              type={showPassword ? 'text' : 'password'} 
              className="form-input"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <button 
              type="button" 
              className="toggle-password-btn" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button type="submit" className="login-btn">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <a href="#" className="forgot-password">Forgot password?</a>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;
