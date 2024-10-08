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
  const [errorMessage, setErrorMessage] = useState(''); // To track validation errors

  const validatePassword = (password, name) => {
    // Check password length and whether it contains the name
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (password.includes(name)) {
      return "Password cannot contain your name.";
    }
    return null; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(password, name);

    if (passwordError) {
      setErrorMessage(passwordError);
      return; // Stop the submission if there are validation errors
    }

    try {
      await axios.post('http://localhost:5000/signup', {
        name,
        username,
        email,
        password,
      });
      setIsSignedUp(true); // Set signup success
      setErrorMessage(''); // Clear any error messages
    } catch (err) {
      alert('Signup failed');
      setErrorMessage('Signup failed, please try again.'); // Update the error message on signup failure
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="signup-button">Signup</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
