
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import pantryRoutes from './routes/pantryRoutes.js';
import ingredientRoutes from './routes/ingredientRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import scannerRoutes from './routes/scannerRoutes.js';
import cors from 'cors';


dotenv.config();


const app = express();



app.use(express.json());
const corsOptions = {
  origin: 'https://despensa-frontend-dc3k.onrender.com',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


app.use('/api/users', userRoutes);
app.use('/api/pantry', pantryRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/scanner', scannerRoutes);

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
