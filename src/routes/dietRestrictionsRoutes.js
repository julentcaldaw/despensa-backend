import express from 'express';
import dietRestrictionsRouter from '../controllers/DietRestrictionsController.js';


const router = express.Router();
router.use('/', dietRestrictionsRouter);

router.get('/enum/diet_restriction', (req, res) => {
	const enumValues = [
		'sin_gluten',
		'sin_lactosa',
		'aplv',
		'frutos_secos',
		'cacahuetes',
		'marisco',
		'pescado',
		'huevo',
		'soja',
		'sesamo',
		'mostaza',
		'apio',
		'sulfitos',
		'altramuces',
		'diabeticos',
		'fodmap',
		'fructosa',
		'histamina',
		'hiposodica',
		'bajo_potasio',
		'bajo_purinas',
		'bajo_residuos',
		'fenilcetonuria',
		'astringente'
	];
	res.json({ values: enumValues });
});

export default router;
