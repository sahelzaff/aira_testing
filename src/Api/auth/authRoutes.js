const express = require('express');
const router = express.Router();
const { register, login } = require('./authController');
const { registerValidation, loginValidation } = require('./authValidation');
const validate = require('./validateMiddleware');

router.post('/register', registerValidation, validate, register);
router.post('/login', loginValidation, validate, login);

module.exports = router;
