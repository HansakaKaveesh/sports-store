import React, { useState, useEffect } from 'react';
import Navbar from '../LoginPage/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import MainContent from './components/MainContent';

import './App.css';

function App() {
  

  // Check if the user is logged in on initial load
 

  

  return (
    <div className="app">
      <Navbar />
      
        <div className="content-area">
          <Sidebar />
          <div className="main-content">
          
            <Profile />
            <MainContent />
            
          </div>
        </div>
       : 
        
        
    </div>
  );
}

export default App;
