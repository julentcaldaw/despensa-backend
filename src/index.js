
import express from 'express';
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


const app = express();



app.use(express.json());


const allowedOrigins = (process.env.CORS_ORIGINS || 'https://despensa-frontend-dc3k.onrender.com,http://localhost:5050')
  .split(',')
  .map(origin => origin.trim());

console.log('CORS allowed origins:', allowedOrigins);

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.error('CORS bloqueado para origen:', origin);
      return callback(new Error('Origen no permitido por CORS: ' + origin));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true
};
app.use(cors(corsOptions));



app.use('/api/users', userRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/scanner', scannerRoutes);
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
