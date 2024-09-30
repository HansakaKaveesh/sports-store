const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection string (replace with your actual DB string)
const mongoURI = 'mongodb://localhost:27017/userDB'; // Replace 'userDB' with your database name

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Import the auth routes
const authRoutes = require('./routes/auth');

// Use the auth routes for all /api/auth requests
app.use('/api/auth', authRoutes);

// Start the server
const port = 5000; // You can change the port if needed
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
