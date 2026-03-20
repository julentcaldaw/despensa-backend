import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.local' });
}
console.log('DEBUG JWT_SECRET:', process.env.JWT_SECRET);

import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes.js';
import historialRoutes from './routes/historialRoutes.js';
import dietRestrictionsRoutes from './routes/dietRestrictionsRoutes.js';
import dietPreferencesRoutes from './routes/dietPreferencesRoutes.js';
import pantryRoutes from './routes/pantryRoutes.js';
import ingredientRoutes from './routes/ingredientRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import scannerRoutes from './routes/scannerRoutes.js';
import shoppingListRoutes from './routes/shoppingListRoutes.js';
import myShopsRoutes from './routes/myShopsRoutes.js';
import purchaseHistoryRoutes from './routes/purchaseHistoryRoutes.js';
import combinedShopsRoutes from './routes/combinedShopsRoutes.js';
import cors from 'cors';
import enumRoutes from './routes/enumRoutes.js';

import recipeDetailRoutes from './routes/recipeDetailRoutes.js';

const prisma = new PrismaClient();
const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGINS.split(','),
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());

app.use('/api', userRoutes); 
app.use('/api/historial', historialRoutes);
app.use('/api/usuario/restricciones', dietRestrictionsRoutes);
app.use('/api/usuario/preferencias', dietPreferencesRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api', purchaseHistoryRoutes);
app.use('/api', combinedShopsRoutes);
app.use('/api/recipe-detail', recipeDetailRoutes);
app.use('/api/scanner', scannerRoutes);
app.use('/api', shoppingListRoutes);
app.use('/api/myshops', myShopsRoutes);
app.use('/api/enum', enumRoutes);

app.get('/', (req, res) => {
  res.send('API Despensa Backend funcionando');
});

if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
  });
}

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`El puerto ${PORT} ya está en uso. Intenta con otro puerto o cierra el proceso que lo está usando.`);
    process.exit(1);
  } else {
    console.error('Error al iniciar el servidor:', err);
    process.exit(1);
  }
});
