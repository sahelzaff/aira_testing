const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./auth/db');
const authRoutes = require('./auth/authRoutes');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,  // Ensure this is true
}));

app.use(bodyParser.json());  // Ensure this line is present
app.use(cookieParser());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await db();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

startServer();
