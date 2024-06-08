import express from 'express';
import { adminLogin, changePassword, registerAdmin } from '../controllers/admin-controller.js'
import { RegisterSchema, LoginSchema } from '../validation/zodschema.js';
import { validate } from '../validation/validation.schema.js';
const router = express.Router();

router.post('/register', validate(RegisterSchema), registerAdmin);
router.post('/login', validate(LoginSchema), adminLogin);
router.post('/resetpassword',changePassword)


export default router;