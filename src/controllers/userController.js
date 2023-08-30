import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { secretKey } from '../config/config.js';
import asyncHandler from 'express-async-handler';

export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        username,
        email,
        password: hashedPassword
    });

    await user.save();

    const token = jwt.sign({ _id: user._id }, secretKey);
    res.cookie('token', token, {
        httpOnly: true,
        secure: false,  // use this for HTTPS in production
        maxAge: 7 * 24 * 60 * 60 * 1000  // cookie will expire in 7 days
    });

    res.status(201).send({
        _id: user._id,
        username: user.username,
        email: user.email
    });
});

export const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Invalid username or password');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        throw new Error('Invalid username or password');
    }

    const token = jwt.sign({ _id: user._id }, secretKey);
    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.send({
        _id: user._id,
        username: user.username,
        email: user.email
    });
});

export const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select('-password'); // exclude the password
    if (!user) {
        throw new Error('User not found');
    }
    res.send(user);
});
