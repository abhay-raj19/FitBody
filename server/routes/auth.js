import express from 'express';
import { registerUser, authUser } from '../controllers/authcontroller.js';
const validate = require("../validation/validate.schema.js")
const RegisterSchema = require("../validation/zodschema.js")
const router = express.Router();

// Register the User
router.post('/register',validate(RegisterSchema), registerUser);
router.post('/login',validate(RegisterSchema),authUser);



export default router;