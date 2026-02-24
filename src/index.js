import express from 'express';
import { PrismaClient } from './generated/prisma/index.js';
const prisma = new PrismaClient();
const app = express();

// Middleware para forzar HTTPS en producción
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
  });
}

// Middleware para exponer prisma en req
app.use((req, res, next) => {
  req.prisma = prisma;
  next();
});

import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import pantryRoutes from './routes/pantryRoutes.js';
import ingredientRoutes from './routes/ingredientRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import scannerRoutes from './routes/scannerRoutes.js';
import shoppingListRoutes from './routes/shoppingListRoutes.js';
import myShopsRoutes from './routes/myShopsRoutes.js';
import cors from 'cors';


dotenv.config();
app.use(express.json());



// Configuración robusta de CORS compatible con Safari/iOS y móviles
const allowedOrigins = (process.env.CORS_ORIGINS || 'https://despensa-frontend-dc3k.onrender.com').split(',').map(origin => origin.trim());
console.log('CORS allowed origins:', allowedOrigins);

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir peticiones sin origen (como desde apps móviles nativas o curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.error('CORS bloqueado para origen:', origin);
      return callback(new Error('Origen no permitido por CORS: ' + origin));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Opcional: Responder manualmente a preflight para máxima compatibilidad
app.options('*', cors(corsOptions));


app.use('/api', userRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/scanner', scannerRoutes);
// Removed duplicate declaration of 'const app = express();'
app.use('/api', shoppingListRoutes);
app.use('/api/myshops', myShopsRoutes);

app.get('/', (req, res) => {
  res.send('API Despensa Backend funcionando');
});

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
