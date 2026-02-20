import express from 'express';
import { getRecipesFromPantry, getRecipesFromList } from '../controllers/recipeController.js';
import { authenticateToken } from '../middlewares/auth.js';


const router = express.Router();

router.get('/from-pantry', authenticateToken, getRecipesFromPantry);
router.post('/from-list', authenticateToken, getRecipesFromList);

export default router;
