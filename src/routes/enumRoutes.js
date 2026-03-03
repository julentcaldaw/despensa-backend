import express from 'express';

const router = express.Router();

router.get('/diet_restriction', (req, res) => {
  res.json({
    values: [
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
    ]
  });
});

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
