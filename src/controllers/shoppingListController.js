import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getShoppingList = async (req, res) => {
  try {
    const items = await prisma.shoppingList.findMany({
      where: { userId: req.user.id },
      include: {
        ingredient: { select: { id: true, name: true, category: true } },
        shop: { select: { id: true, name: true } }
      }
    });
    const grouped = {};
    items.forEach(item => {
      const shopKey = item.shop ? item.shop.name : 'Sin tienda';
      if (!grouped[shopKey]) grouped[shopKey] = [];
      grouped[shopKey].push({
        id: item.id,
        ingredient: item.ingredient,
        bought: item.bought || false
      });
    });
    res.json(grouped);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addShoppingListItem = async (req, res) => {
  const { ingredientId, shopId } = req.body;
  if (!ingredientId) {
    return res.status(400).json({ error: 'Falta el id del ingrediente' });
  }
  try {
    const exists = await prisma.shoppingList.findFirst({
      where: { userId: req.user.id, ingredientId }
    });
    if (exists) {
      return res.status(409).json({ error: 'Este ingrediente ya está en la lista de la compra.' });
    }
    const item = await prisma.shoppingList.create({
      data: {
        userId: req.user.id,
        ingredientId,
        shopId: shopId || null
      }
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteShoppingListItem = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.shoppingList.delete({ where: { id: Number(id) } });
    res.json({ message: 'Ingrediente eliminado de la lista de la compra' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const markAsBought = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.shoppingList.findUnique({ where: { id: Number(id) } });
    if (!item) return res.status(404).json({ error: 'Ingrediente no encontrado en la lista' });
    await prisma.shoppingList.delete({ where: { id: Number(id) } });
    await prisma.pantry.create({
      data: {
        userId: item.userId,
        ingredientId: item.ingredientId
      }
    });
    res.json({ message: 'Ingrediente marcado como comprado y añadido a la despensa' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
