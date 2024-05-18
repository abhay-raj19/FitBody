import express from 'express';
import {addPlan, deletePlan, getAllPlans, getPlanDetails, getPlanUsers} from '../controllers/plan-controller.js'
import isAdminAuthenticated from '../middleware/adminMiddleware.js';

const router=express.Router()

router.post('/',isAdminAuthenticated,addPlan)
router.get('/',getAllPlans)
router.get('/:id',getPlanDetails)
router.delete('/:id',isAdminAuthenticated,deletePlan)
router.get('/plan_users/:id',isAdminAuthenticated,getPlanUsers)

export default router;