import express from 'express';
import { getRecipesFromPantry, getRecipesFromList } from '../controllers/recipeController.js';
import { authenticateToken } from '../middlewares/auth.js';


const router = express.Router();


// Ruta informativa para GET /api/recipes
router.get('/', (req, res) => {
	res.json({
		message: 'Usa /api/recipes/from-pantry (GET) o /api/recipes/from-list (POST) para obtener recetas.'
	});
});

router.get('/desde-despensa', authenticateToken, getRecipesFromPantry);
router.post('/desde-lista', authenticateToken, getRecipesFromList);

export default router;
