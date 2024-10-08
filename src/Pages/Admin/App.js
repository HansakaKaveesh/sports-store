import React, { useState, useEffect } from 'react';
import Navbar from '../LoginPage/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import MainContent from './components/MainContent';
import Login from '../LoginPage/LoginPage'; // Import the Login component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <Navbar />
      {isLoggedIn ? (
        <div className="content-area">
          <Sidebar />
          <div className="main-content">
          <button onClick={handleLogout} className="logout-btn">Logout</button>
            <Profile />
            <MainContent />
            
          </div>
        </div>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} /> // Pass setIsLoggedIn to the Login component
      )}
    </div>
  );
}

export default App;
