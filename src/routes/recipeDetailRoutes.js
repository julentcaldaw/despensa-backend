import express from 'express';
import { getRecipeDetail } from '../controllers/recipeDetailController.js';

const router = express.Router();

// Ruta para obtener el detalle de una receta por ID
router.get('/:id', getRecipeDetail);

export default router;
