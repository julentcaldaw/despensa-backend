// Endpoint para exponer los valores del enum diet_restriction
import express from 'express';
import { PrismaClient } from '../generated/prisma/index.js';

const router = express.Router();
const prisma = new PrismaClient();

// GET /api/enum/diet_restriction
router.get('/diet_restriction', async (req, res) => {
  try {
    // Prisma no expone enums directamente, así que consultamos el esquema
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
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener el enum diet_restriction', details: error.message });
  }
});

export default router;
