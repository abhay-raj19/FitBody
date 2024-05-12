import express from 'express';
import { registerUser, authUser } from '../controllers/auth.controller.js';

const router = express.Router();

// Register the User
router.post('/register', registerUser);
router.post('/login',authUser);




export default router;