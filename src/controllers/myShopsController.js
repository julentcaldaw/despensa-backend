import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getMyShops = async (req, res) => {
  try {
    const shops = await prisma.shop.findMany({ where: { userId: req.user.id } });
    res.json(shops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addShop = async (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'El nombre de la tienda no puede estar vacío.' });
  }
  try {
    const exists = await prisma.shop.findFirst({ where: { userId: req.user.id, name: name.trim() } });
    if (exists) {
      return res.status(409).json({ error: 'Ya tienes una tienda con ese nombre.' });
    }
    const shop = await prisma.shop.create({ data: { userId: req.user.id, name: name.trim() } });
    res.status(201).json(shop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteShop = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.shop.delete({ where: { id: Number(id), userId: req.user.id } });
    res.json({ message: 'Tienda eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
