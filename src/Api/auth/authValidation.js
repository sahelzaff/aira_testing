// src/api/auth/authValidation.js
const { body } = require('express-validator');

const registerValidation = [
  body('firstName').notEmpty().withMessage('First Name is required'),
  body('lastName').notEmpty().withMessage('Last Name is required'),
  body('emailId').isEmail().withMessage('Valid email is required'),
  body('phoneNumber').isMobilePhone().withMessage('Valid phone number is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

const loginValidation = [
  body('identifier').notEmpty().withMessage('Email or Phone Number is required'),
  body('password').notEmpty().withMessage('Password is required')
];

module.exports = { registerValidation, loginValidation };
