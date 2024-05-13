import express from 'express';
import { registerUser, authUser, changePassword } from '../controllers/authcontroller.js';

const router = express.Router();

// Register the User
router.post('/register', registerUser);
router.post('/login',authUser);
router.post('/resetpassword',changePassword)


export default router;