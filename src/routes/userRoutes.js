import express from 'express';
import { register, login, getProfile, refreshToken, updateProfile, getUserStats, getUserDietRestrictions, saveUserDietRestrictions } from '../controllers/userController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/registro', register);
router.post('/login', login);

router.post('/refrescar-token', refreshToken);

router.get('/usuario', authenticateToken, getProfile);
router.put('/usuario', authenticateToken, updateProfile);

// Restricciones alimentarias del usuario autenticado
router.get('/usuario/restricciones', authenticateToken, getUserDietRestrictions);
router.post('/usuario/restricciones', authenticateToken, saveUserDietRestrictions);

router.get('/usuario/estado', authenticateToken, getUserStats);

export default router;
 