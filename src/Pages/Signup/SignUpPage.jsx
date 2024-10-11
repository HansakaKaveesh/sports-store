import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Import the CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (password === name || password === username) {
      setError('Password should not match the name or username.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', { name, username, email, password });
      alert(response.data.message);
    } catch (error) {
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Error in signup');
      }
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        className="signup-input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="signup-input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        className="signup-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="signup-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signup-button" onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
