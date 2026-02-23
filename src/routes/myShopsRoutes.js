import express from 'express';
import { getMyShops, addShop, deleteShop } from '../controllers/myShopsController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getMyShops);
router.post('/', authenticateToken, addShop);
router.delete('/:id', authenticateToken, deleteShop);

export default router;
