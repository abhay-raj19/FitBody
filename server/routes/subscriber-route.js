import express from 'express';
import addSubscriber from '../controllers/subscriber-controller';

const router = express.Router();

router.post('/', addSubscriber);

export default router;