import express from 'express';
import * as purchaseHistoryController from '../controllers/purchaseHistoryController.js';

const router = express.Router();

// Historial para usuario autenticado
router.get('/historial', (req, res, next) => {
	if (!req.user || !req.user.id) {
		return res.status(401).json({ error: 'Usuario no autenticado.' });
	}
	req.params.userId = req.user.id;
	purchaseHistoryController.getPurchaseHistory(req, res, next);
});

router.post('/historial', purchaseHistoryController.savePurchase);
router.get('/historial/:userId', purchaseHistoryController.getPurchaseHistory);

export default router;
