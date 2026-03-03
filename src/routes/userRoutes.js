import express from 'express';
import { register, login, getProfile, refreshToken, updateProfile, getUserStats, getUserDietRestrictions, saveUserDietRestrictions } from '../controllers/userController.js';
import { getDietPreferences, saveDietPreferences } from '../controllers/DietPreferencesController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/registro', register);
router.post('/login', login);

router.post('/refrescar-token', refreshToken);

router.get('/usuario', authenticateToken, getProfile);
router.put('/usuario', authenticateToken, updateProfile);

router.get('/usuario/restricciones', authenticateToken, getUserDietRestrictions);
router.post('/usuario/restricciones', authenticateToken, saveUserDietRestrictions);

router.get('/usuario/preferencias', authenticateToken, getDietPreferences);
router.post('/usuario/preferencias', authenticateToken, saveDietPreferences);

router.get('/usuario/estado', authenticateToken, getUserStats);

export default router;
 