import express from 'express';
import {
  getShoppingList,
  addShoppingListItem,
  deleteShoppingListItem,
  markAsBought
} from '../controllers/shoppingListController.js';

import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();


router.get('/shoppinglist', authenticateToken, getShoppingList);
router.post('/shoppinglist', authenticateToken, addShoppingListItem);


export default router;
