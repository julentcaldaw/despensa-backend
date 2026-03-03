import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

function normalizeShopName(name) {
  return name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ');
}

export const getMyShops = async (req, res) => {
  try {
    const shops = await prisma.shop.findMany({ where: { userId: req.user.id } });
    res.json(shops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addShop = async (req, res) => {
  const name = (req.body.name || req.body.shop);
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'El nombre de la tienda no puede estar vacío.' });
  }
  const normalizedName = normalizeShopName(name);
  try {
    const exists = await prisma.shop.findFirst({ where: { userId: req.user.id, name: normalizedName } });
    if (exists) {
      return res.status(409).json({ error: 'Ya tienes una tienda con ese nombre.' });
    }
    await prisma.shop.create({ data: { userId: req.user.id, name: normalizedName } });
    const shops = await prisma.shop.findMany({ where: { userId: req.user.id } });
    res.status(201).json(shops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteShop = async (req, res) => {
  const shopName = req.params.shopName;
  if (!shopName || typeof shopName !== 'string' || shopName.trim() === '') {
    return res.status(400).json({ error: 'El nombre de la tienda es requerido en la URL.' });
  }
  const normalizedName = normalizeShopName(shopName);
  console.log('Intentando eliminar tienda:', normalizedName, 'para usuario:', req.user.id);
  try {
    const shop = await prisma.shop.findFirst({ where: { userId: req.user.id, name: normalizedName } });
    console.log('Resultado búsqueda tienda:', shop);
    if (!shop) {
      return res.status(404).json({ error: 'Tienda no encontrada.' });
    }
    await prisma.shop.delete({ where: { id: shop.id } });
    const shops = await prisma.shop.findMany({ where: { userId: req.user.id } });
    res.json(shops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const listUserShops = async (req, res) => {
  try {
    const shops = await prisma.shop.findMany({ where: { userId: req.user.id } });
    res.json(shops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
