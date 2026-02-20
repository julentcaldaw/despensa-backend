import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getIngredients = async (req, res) => {
  try {
    const ingredients = await prisma.ingredient.findMany({
      select: { id: true, name: true, category: true }
    });
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addIngredient = async (req, res) => {
  const { name, category } = req.body;
  const validCategories = [
    'frutas_verduras',
    'carnes_pescados',
    'lacteos_huevos',
    'despensa_granos',
    'condimentos_aceites',
    'snacks_extras'
  ];
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'El nombre del ingrediente no puede estar vacío.' });
  }
  if (!category || !validCategories.includes(category)) {
    return res.status(400).json({ error: 'La categoría debe ser una de: ' + validCategories.join(', ') });
  }
  try {
    const existing = await prisma.ingredient.findFirst({
      where: {
        name: name.trim()
      }
    });
    if (existing) {
      let updated = false;
      let updateData = {};
      if ((!existing.category || existing.category === null) && category) {
        updateData.category = category;
        updated = true;
      }
      let ingredient = existing;
      if (updated) {
        ingredient = await prisma.ingredient.update({
          where: { id: existing.id },
          data: updateData
        });
      }
      return res.status(200).json({ id: ingredient.id, name: ingredient.name, category: ingredient.category });
    }
    const ingredient = await prisma.ingredient.create({
      data: {
        name: name.trim(),
        category: category
      }
    });
    res.status(201).json({ id: ingredient.id, name: ingredient.name, category: ingredient.category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateIngredient = async (req, res) => {
  const { id } = req.params;
  const { name, category } = req.body;
  const validCategories = [
    'frutas_verduras',
    'carnes_pescados',
    'lacteos_huevos',
    'despensa_granos',
    'condimentos_aceites',
    'snacks_extras'
  ];
  if (category && !validCategories.includes(category)) {
    return res.status(400).json({ error: 'La categoría debe ser una de: ' + validCategories.join(', ') });
  }
  try {
    const ingredient = await prisma.ingredient.update({
      where: { id: Number(id) },
      data: { name, category }
    });
    res.json(ingredient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteIngredient = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.ingredient.delete({ where: { id: Number(id) } });
    res.json({ message: 'Ingrediente eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
