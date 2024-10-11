import { useState } from 'react';
import axios from 'axios';
import './Login.css';  // Make sure to import the CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      alert("Login successful");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Login</h2>
      <input
        className="form-input"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="form-input"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <div className="toggle-container">
        <button
          type="button"
          className="toggle-button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>
      </div>
      <button className="form-button" type="submit">Login</button>
    </form>
  );
}

export default Login;
