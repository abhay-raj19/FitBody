import express from 'express';
import { register } from '../controllers/auth.controller.js';

const router = express.Router();

// Register the User
router.post('/register', register);


// Register as admin


export default router;