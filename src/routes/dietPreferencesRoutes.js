import express from 'express';
import { authenticateToken } from '../middlewares/auth.js';
import { getDietPreferences, saveDietPreferences } from '../controllers/DietPreferencesController.js';

const router = express.Router();
router.get('/', authenticateToken, getDietPreferences);
router.post('/', authenticateToken, saveDietPreferences);

export default router;