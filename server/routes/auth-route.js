import express from 'express';
import { registerUser, authUser, changePassword } from '../controllers/auth-controller.js';
import { RegisterSchema, LoginSchema } from '../validation/zodschema.js';
import { validate } from '../validation/validation.schema.js';
const router = express.Router();

router.post('/register',validate(RegisterSchema), registerUser);
router.post('/login',validate(LoginSchema) ,authUser);
router.post('/resetpassword',changePassword)


export default router;