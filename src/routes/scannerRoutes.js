import express from 'express';
import { scanBarcode } from '../controllers/scannerController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/scan', authenticateToken, scanBarcode);

export default router;
