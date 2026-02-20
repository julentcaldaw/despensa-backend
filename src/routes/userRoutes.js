import express from 'express';
import { register, login, getProfile, refreshToken } from '../controllers/userController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.post('/refresh-token', refreshToken);

export default router;
