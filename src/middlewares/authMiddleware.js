import jwt from 'jsonwebtoken';
import { secretKey } from '../config/config.js';

export const authenticate = (req, res, next) => {
    const token = req.cookies.token;  // Retrieve the token from the cookies
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (exception) {
        res.status(400).send('Invalid token.');
    }
};

