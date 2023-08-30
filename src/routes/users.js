import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
import {
    validateUserRegistration,
    validateUserLogin
} from '../validators/userValidators.js';

const router = express.Router();

router.route('/register')
    .post(validateUserRegistration, registerUser);

router.route('/login')
    .post(validateUserLogin, loginUser);

export default router;

// old way

// router.post('/register', registerUser);
// router.post('/login', loginUser);