import { useState } from 'react';
import axios from 'axios';
import './SignUpPage.css';  // Make sure to import the CSS

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Sign Up</h2>
      <input
        className="form-input"
        name="fullName"
        onChange={handleChange}
        placeholder="Full Name"
      />
      <input
        className="form-input"
        name="username"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        className="form-input"
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        className="form-input"
        name="phoneNumber"
        onChange={handleChange}
        placeholder="Phone Number"
      />
      <input
        className="form-input"
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button className="form-button" type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
