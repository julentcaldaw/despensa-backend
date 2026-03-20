import express from 'express';
import * as historialController from '../controllers/historialController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

// GET /api/historial
router.get('/', authenticateToken, historialController.getHistorial);

export default router;
