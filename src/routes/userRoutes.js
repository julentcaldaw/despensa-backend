import express from 'express';
import { register, login, getProfile, refreshToken, updateProfile, getUserStats } from '../controllers/userController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/registro', register);
router.post('/login', login);

router.post('/refrescar-token', refreshToken);

router.get('/usuario', authenticateToken, getProfile);
router.put('/usuario', authenticateToken, updateProfile);
router.get('/usuario/estado', authenticateToken, getUserStats);

export default router;
