import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      alert(response.data.message);
    } catch (error) {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        type="email"
        className="login-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type={showPassword ? "text" : "password"}
        className="login-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="toggle-password-btn"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Hide' : 'Show'} Password
      </button>
      <button className="login-button" onClick={handleLogin}>Login</button>
      <a className="forgot-password-link" href="/forgot-password">Forgot Password?</a>
    </div>
  );
};

export default Login;
