import express from 'express';
import {
  getShoppingList,
  addShoppingListItem,
  deleteShoppingListItem,
  markAsBought
} from '../controllers/shoppingListController.js';

import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.get('/shopping-list', authenticateToken, getShoppingList);
router.post('/shopping-list', authenticateToken, addShoppingListItem);
router.delete('/shopping-list/:id', authenticateToken, deleteShoppingListItem);
router.post('/shopping-list/:id/bought', authenticateToken, markAsBought);


export default router;
