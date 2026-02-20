import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
import fetch from 'node-fetch';

export const getRecipesFromPantry = async (req, res) => {
  try {
    const pantry = await prisma.pantry.findMany({
      where: { userId: req.user.id },
      include: {
        user: false
      }
    });
    if (pantry.length === 0) {
      return res.status(400).json({ error: 'No hay ingredientes en el inventario' });
    }
    const ingredients = pantry.map(p => p.name).join(',');
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients)}&number=5&apiKey=${process.env.SPOONACULAR_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const filtered = Array.isArray(data) ? data.map(r => ({
      id: r.id,
      title: r.title,
      image: r.image,
      usedIngredients: r.usedIngredients?.map(i => i.name) || [],
      missedIngredients: r.missedIngredients?.map(i => i.name) || []
    })) : [];
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRecipesFromList = async (req, res) => {
  const { ingredients } = req.body;
  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({ error: 'Debes enviar una lista de ingredientes' });
  }
  try {
    const ingredientsStr = ingredients.join(',');
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredientsStr)}&number=5&apiKey=${process.env.SPOONACULAR_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    const filtered = Array.isArray(data) ? data.map(r => ({
      id: r.id,
      title: r.title,
      image: r.image,
      usedIngredients: r.usedIngredients?.map(i => i.name) || [],
      missedIngredients: r.missedIngredients?.map(i => i.name) || []
    })) : [];
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
