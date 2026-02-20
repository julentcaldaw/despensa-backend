import express from 'express';
import { getIngredients, addIngredient, updateIngredient, deleteIngredient } from '../controllers/ingredientController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getIngredients);
router.post('/', authenticateToken, addIngredient);
router.put('/:id', authenticateToken, updateIngredient);
router.delete('/:id', authenticateToken, deleteIngredient);

export default router;
