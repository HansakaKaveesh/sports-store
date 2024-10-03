const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

// Create an Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Othishi', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Signup Route
app.post('/signup', async (req, res) => {
  const { name, username, email, password } = req.body;
  
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = new User({
    name,
    username,
    email,
    password: hashedPassword
  });
  
  await user.save();
  
  res.status(201).json({ message: 'User created' });
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = await User.findOne({ username });
  
  if (!user) {
    return res.status(400).json({ error: 'Invalid username' });
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.password);
  
  if (!isPasswordValid) {
    return res.status(400).json({ error: 'Invalid password' });
  }
  
  const token = jwt.sign({ userId: user._id }, 'secretKey');
  
  res.json({ token });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
