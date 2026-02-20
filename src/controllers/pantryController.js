import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getPantry = async (req, res) => {
  try {
    const items = await prisma.pantry.findMany({
      where: { userId: req.user.id },
      include: {
        ingredient: {
          select: {
            name: true,
            category: true
          }
        }
      }
    });
    const response = items.map(item => ({
      id: item.id,
      name: item.ingredient?.name,
      category: item.category
    }));
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addPantryItem = async (req, res) => {
  const { ingredientId, category } = req.body;
  if (!ingredientId) {
    return res.status(400).json({ error: 'Falta el id del ingrediente' });
  }
  try {
    const exists = await prisma.pantry.findFirst({
      where: {
        userId: req.user.id,
        ingredientId
      }
    });
    if (exists) {
      return res.status(409).json({ error: 'Ya tienes este producto en tu despensa.' });
    }
    const item = await prisma.pantry.create({
      data: {
        userId: req.user.id,
        ingredientId,
        category: category || null
      }
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePantryItem = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const item = await prisma.pantry.update({
      where: { id: Number(id) },
      data: { name },
    });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePantryItem = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.pantry.delete({ where: { id: Number(id) } });
    res.json({ message: 'Ingrediente eliminado del inventario' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
