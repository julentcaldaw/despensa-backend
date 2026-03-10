import express from 'express';
import { getCombinedShops } from '../controllers/combinedShopsController.js';

const router = express.Router();

router.get('/combined-shops/:userId', getCombinedShops);

export default router;
