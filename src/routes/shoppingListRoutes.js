import express from 'express';
import {
  getShoppingList,
  addShoppingListItem,
  deleteShoppingListItem,
  updateBoughtStatus,
  getShoppingHistory
} from '../controllers/shoppingListController.js';

import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();


router.get('/listacompra', authenticateToken, getShoppingList);
router.post('/listacompra', authenticateToken, addShoppingListItem);
router.patch('/listacompra/:id/bought', authenticateToken, updateBoughtStatus);
router.get('/listacompra/history/:userId', authenticateToken, getShoppingHistory);
router.get('/miscompras/history/:userId', authenticateToken, getShoppingHistory);
router.delete('/listacompra/:id', authenticateToken, deleteShoppingListItem);


export default router;
