import express from 'express';
import { authenticateToken } from '../middlewares/auth.js';
import { getDietPreferences, saveDietPreferences } from '../controllers/DietPreferencesController.js';

const router = express.Router();
router.get('/', authenticateToken, getDietPreferences);
router.post('/', authenticateToken, saveDietPreferences);
router.get('/diet_preference', (req, res) => {
  res.json({
    values: [
      'none',
      'vegetarian',
      'lacto_vegetarian',
      'ovo_vegetarian',
      'vegan',
      'pescetarian',
      'keto',
      'paleo'
    ]
  });
});

export default router;