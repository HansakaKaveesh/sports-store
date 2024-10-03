import React, { useState } from 'react';
import axios from 'axios';
import './SignUpPage.css';
import Header from '../LoginPage/Header';
import Footer from '../Home/components/Footer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false); // Track signup status

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/signup', {
        name,
        username,
        email,
        password,
      });
      setIsSignedUp(true); // Set signup success
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div>
      <Header />
      <div className="signup-container">
        <h2 className="signup-heading">Signup</h2>
        {isSignedUp ? (
          <div className="signup-success-message">
            <p>Signup successful! You can now <Link to="/login">Login</Link>.</p>
          </div>
        ) : (
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>
            <button type="submit" className="signup-button">Signup</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
