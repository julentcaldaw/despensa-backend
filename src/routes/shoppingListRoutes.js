import express from 'express';
import {
  getShoppingList,
  addShoppingListItem,
  deleteShoppingListItem,
  updateBoughtStatus
} from '../controllers/shoppingListController.js';

import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();


router.get('/listacompra', authenticateToken, getShoppingList);
router.post('/listacompra', authenticateToken, addShoppingListItem);
router.patch('/listacompra/:id/bought', authenticateToken, updateBoughtStatus);
router.delete('/listacompra/:id', authenticateToken, deleteShoppingListItem);


export default router;
