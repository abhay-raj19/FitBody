import express from 'express';
import { addUserToPlan, getAllUsers, userDetails } from '../controllers/user-controller.js';
import isUserAuthenticated from '../middleware/authMiddleware.js';

const router=express.Router()

router.get('/:id',userDetails)
router.get('/',getAllUsers)
router.post('/:id',isUserAuthenticated,addUserToPlan)

export default router;