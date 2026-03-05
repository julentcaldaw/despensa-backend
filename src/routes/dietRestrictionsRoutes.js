import express from 'express';
import dietRestrictionsRouter from '../controllers/DietRestrictionsController.js';


const router = express.Router();
router.use('/', dietRestrictionsRouter);

export default router;
