const User = require('./userModel');
const { hashPassword, verifyPassword } = require('./passwordUtils');
const { generateToken } = require('./jwtUtils');

const registerUser = async (userData) => {
  const { firstName, lastName, emailId, phoneNumber, password } = userData;

  if (!emailId || !phoneNumber) {
    throw new Error('EmailId and PhoneNumber are required');
  }

  const existingUser = await User.findOne({
    $or: [{ emailId: emailId }, { phoneNumber: phoneNumber }]
  });
  if (existingUser) throw new Error('Email or PhoneNumber already exists');

  const hashedPassword = await hashPassword(password);
  const userId = Math.floor(100000 + Math.random() * 900000).toString();

  const user = new User({
    firstName,
    lastName,
    emailId,
    phoneNumber,
    password: hashedPassword,
    userId
  });

  await user.save();
  return user;
};

const loginUser = async (identifier, password) => {
  const user = await User.findOne({
    $or: [{ emailId: identifier }, { phoneNumber: identifier }]
  });

  if (!user) throw new Error('User not found');

  const isMatch = await verifyPassword(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  user.lastLogin = Date.now();
  await user.save();

  const token = generateToken(user);
  return { user, token };
};

module.exports = { registerUser, loginUser };
