import express from 'express';
import {
  getShoppingList,
  addShoppingListItem,
  deleteShoppingListItem,
  markAsBought,
  updateBoughtStatus
} from '../controllers/shoppingListController.js';

import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();


router.get('/shoppinglist', authenticateToken, getShoppingList);
router.post('/shoppinglist', authenticateToken, addShoppingListItem);
router.patch('/shoppinglist/:id/bought', authenticateToken, updateBoughtStatus);


export default router;
