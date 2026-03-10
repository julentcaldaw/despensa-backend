
import express from 'express';
import * as purchaseHistoryController from '../controllers/purchaseHistoryController.js';

const router = express.Router();

router.post('/purchase-history', purchaseHistoryController.savePurchase);
router.get('/purchase-history/:userId', purchaseHistoryController.getPurchaseHistory);

export default router;
