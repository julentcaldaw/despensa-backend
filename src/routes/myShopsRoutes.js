import express from 'express';
import { getMyShops, addShop, deleteShop, listUserShops } from '../controllers/myShopsController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getMyShops);
router.post('/', authenticateToken, addShop);
router.delete('/:shopName', authenticateToken, deleteShop);
router.get('/all', authenticateToken, listUserShops);

export default router;
