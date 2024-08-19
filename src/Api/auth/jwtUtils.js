// src/api/auth/jwtUtils.js
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./jwt'); // Ensure you have a JWT_SECRET in jwtConfig.js

const generateToken = (user) => {
  const payload = {
    userId: user._id,
    userId: user.userId,
    userRole: user.userRole
  };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });  // Set token expiration as needed
};

module.exports = { generateToken };
