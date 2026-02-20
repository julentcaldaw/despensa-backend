import express from 'express';
import { getPantry, addPantryItem, updatePantryItem, deletePantryItem } from '../controllers/pantryController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getPantry);
router.post('/', authenticateToken, addPantryItem);
router.put('/:id', authenticateToken, updatePantryItem);
router.delete('/:id', authenticateToken, deletePantryItem);

export default router;
