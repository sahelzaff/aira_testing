const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: String,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    unique: true, // Ensure emailId is unique
    required: true
  },
  phoneNumber: {
    type: String,
    unique: true, // Ensure phoneNumber is unique
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  profileImageUrl: { type: String, default: null },
  dateOfBirth: { type: Date, default: null },
  gender: { type: String, default: null },
  address: { type: String, default: null },
  userRole: { type: String, default: 'user' },
  status: { type: String, default: 'active' },
  lastLogin: { type: Date, default: null },
  altMobileNumber: { type: String, default: null },
  resetPasswordToken: { type: String, default: null },
  resetPasswordExpires: { type: Date, default: null }
});

userSchema.pre('save', function(next) {
  if (this.isNew) {
    this.userId = Math.floor(100000 + Math.random() * 900000).toString();
  }
  this.updatedAt = Date.now();
  next();
});

const User = mongoose.model('User', userSchema, 'Main.users');

module.exports = User;
