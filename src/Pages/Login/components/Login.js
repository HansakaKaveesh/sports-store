import React, { useState } from "react";
import './Login.css'; // External CSS for styling

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login-page">
     
      
      <div className="login-container">
        <h3>Hello,</h3>
        <h1>Welcome</h1>

        <form action="login.php" method="POST">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input 
            type={passwordShown ? "text" : "password"} 
            id="password" 
            name="password" 
            required 
          />
          <label htmlFor="show-password">
            <input 
              type="checkbox" 
              id="show-password" 
              onClick={togglePassword} 
            /> Show Password
          </label>

          <button type="submit" value="Login">Login</button>
        </form>

        <div className="form-footer">
          Don't have an account? <a href="signup.html">Sign up here</a>
        </div>

        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Login;
