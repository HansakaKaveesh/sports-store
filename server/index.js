// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
// server/index.js
mongoose.connect(process.env.MONGO_URI, {
    connectTimeoutMS: 30000, // 30 seconds timeout
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB Atlas:", error);
  });
  


// User schema
const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

// Signup route
app.post('/signup', async (req, res) => {
  const { name, username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    username,
    email,
    password: hashedPassword
  });

  try {
    await newUser.save();
    res.status(201).send("User Created");
  } catch (error) {
    res.status(500).send("Error: " + error);
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(404).send("User not found");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).send("Invalid password");

  res.status(200).send("Login Successful");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
