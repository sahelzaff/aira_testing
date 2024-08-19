const { registerUser, loginUser } = require('./authService');
const { validationResult } = require('express-validator');
const { registerValidation, loginValidation } = require('./authValidation');

const register = async (req, res) => {
  await Promise.all(registerValidation.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: 'User registered', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  await Promise.all(loginValidation.map((validation) => validation.run(req)));

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { identifier, password } = req.body;

  try {
    const { user, token } = await loginUser(identifier, password);
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };
