import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import fetch from 'node-fetch';
import { translateIngredients } from '../utils/translate.js';
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
    console.log('Ingredientes originales:', ingredientsArr);
    const translated = await translateIngredients(ingredientsArr, 'en');
    console.log('Ingredientes traducidos:', translated);
    const recipes = await fetchEdamamRecipes(translated);
    res.json({ ingredients: ingredientsArr, recipes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRecipesFromList = async (req, res) => {
  console.log('Body recibido en /api/recipes/desde-lista:', req.body);
  const { ingredients, maxTime } = req.body;
  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    console.log('Error: ingredients no válido:', ingredients);
    return res.status(400).json({ error: 'Debes enviar una lista de ingredientes' });
  }
  try {
    console.log('Ingredientes originales:', ingredients);
    const translated = await translateIngredients(ingredients, 'en');
    console.log('Ingredientes traducidos:', translated);
    let allRecipes = [];
    let seen = new Set();
    for (const ing of translated) {
      const recipes = await fetchEdamamRecipes([ing]);
      for (const r of recipes) {
        if (!seen.has(r.title + r.url)) {
          allRecipes.push(r);
          seen.add(r.title + r.url);
        }
      }
    }
    let filtered = allRecipes;
    if (maxTime && !isNaN(Number(maxTime))) {
      filtered = allRecipes.filter(r => {
        if (typeof r.totalTime === 'number') {
          return r.totalTime === 0 || r.totalTime <= Number(maxTime);
        }
        return true;
      });
    }
    res.json(filtered);
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
    qParam = ingredientsStr.map(i => encodeURIComponent(i)).join(' ');
  } else {
    qParam = encodeURIComponent(ingredientsStr);
  }
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${qParam}&app_id=${appId}&app_key=${apiKey}`;
  console.log('URL Edamam:', url);
  const headers = {
    'Edamam-Account-User': accountUser
  };
  console.log('Consultando Edamam:', url);
  console.log('Headers enviados:', headers);
  const response = await fetch(url, { headers });
  const data = await response.json();
  console.log('Respuesta Edamam:', JSON.stringify(data, null, 2));
  const hits = Array.isArray(data.hits) ? data.hits : [];
  return hits.map(hit => ({
    title: hit.recipe.label,
    image: hit.recipe.image,
    ingredients: hit.recipe.ingredientLines,
    url: hit.recipe.url,
    source: hit.recipe.source,
    totalTime: hit.recipe.totalTime 
  }));
}
