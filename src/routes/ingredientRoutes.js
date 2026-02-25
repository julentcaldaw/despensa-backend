import express from 'express';
import { getIngredients, addIngredient, updateIngredient, deleteIngredient, getCategoryByIngredientName } from '../controllers/ingredientController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authenticateToken, getIngredients);
// Endpoint para autocompletar categoría por nombre de ingrediente
router.get('/category', authenticateToken, getCategoryByIngredientName);
router.post('/', authenticateToken, addIngredient);
router.put('/:id', authenticateToken, updateIngredient);
router.delete('/:id', authenticateToken, deleteIngredient);

export default router;
