import express from 'express';
import { registerUser, authUser, changePassword } from '../controllers/auth-controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login',authUser);
router.post('/resetpassword',changePassword)


export default router;