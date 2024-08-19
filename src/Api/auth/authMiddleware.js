const jwt = require('jsonwebtoken');
const User = require('./userModel');
const { jwtSecret } = require('./jwt');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(401).json({ message: 'Authorization denied' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
