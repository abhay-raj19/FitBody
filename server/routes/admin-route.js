import express from 'express';
import { adminLogin, changePassword, registerAdmin } from '../controllers/admin-controller.js'

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login',adminLogin);
router.post('/resetpassword',changePassword)


export default router;