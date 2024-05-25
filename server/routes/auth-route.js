import express from 'express';
import { registerUser, authUser, changePassword, sendOTP } from '../controllers/auth-controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login',authUser);
router.post('/resetpassword',changePassword)
router.post('/send-otp',sendOTP)

export default router;