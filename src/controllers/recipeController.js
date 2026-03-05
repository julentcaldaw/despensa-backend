import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

export const getRecipesFromPantry = async (req, res) => {
  try {
    const pantry = await prisma.pantry.findMany({
      where: { userId: req.user.id },
      include: { ingredient: { select: { name: true } } }
    });
    if (!pantry || pantry.length === 0) {
      return res.json({ ingredients: [], recipes: [] });
    }
    const ingredientsArr = pantry.map(p => p.ingredient?.name).filter(Boolean);
    if (ingredientsArr.length === 0) {
      return res.json({ ingredients: [], recipes: [] });
    }
    // Usar todos los ingredientes y enviarlos como array separado por comas
    const recipes = await fetchEdamamRecipes(ingredientsArr);
    res.json({ ingredients: ingredientsArr, recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRecipesFromList = async (req, res) => {
  console.log('Body recibido en /api/recipes/desde-lista:', req.body);
  const { ingredients } = req.body;
  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    console.log('Error: ingredients no válido:', ingredients);
    return res.status(400).json({ error: 'Debes enviar una lista de ingredientes' });
  }
  try {
    const recipes = await fetchEdamamRecipes(ingredients);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
async function fetchEdamamRecipes(ingredientsStr) {
  const appId = process.env.REACT_APP_EDAMAM_APP_ID;
  const apiKey = process.env.REACT_APP_EDAMAM_API_KEY;
  const accountUser = process.env.REACT_APP_EDAMAM_ACCOUNT_USER;
  if (!appId || !apiKey || !accountUser) {
    throw new Error('Faltan credenciales de Edamam en variables de entorno');
  }
  let qParam = '';
  if (Array.isArray(ingredientsStr)) {
    qParam = ingredientsStr.map(i => encodeURIComponent(i)).join(',');
  } else {
    qParam = encodeURIComponent(ingredientsStr);
  }
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${qParam}&app_id=${appId}&app_key=${apiKey}`;
  const headers = {
    'Edamam-Account-User': accountUser
  };
  console.log('Consultando Edamam:', url);
  console.log('Headers enviados:', headers);
  const response = await fetch(url, { headers });
  const data = await response.json();
  console.log('Respuesta Edamam:', JSON.stringify(data, null, 2));
  // Edamam soporta language=es, pero la traducción depende de la receta
  const hits = Array.isArray(data.hits) ? data.hits : [];
  return hits.map(hit => ({
    title: hit.recipe.label,
    image: hit.recipe.image,
    ingredients: hit.recipe.ingredientLines,
    url: hit.recipe.url,
    source: hit.recipe.source
  }));
}
