import { PrismaClient } from '../src/generated/prisma/index.js';
const prisma = new PrismaClient();

function normalizeShopName(name) {
  return name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ');
}

async function normalizeAllShopNames() {
  try {
    const shops = await prisma.shop.findMany();
    for (const shop of shops) {
      const normalized = normalizeShopName(shop.name);
      if (shop.name !== normalized) {
        await prisma.shop.update({
          where: { id: shop.id },
          data: { name: normalized }
        });
        console.log(`Tienda actualizada: ${shop.name} -> ${normalized}`);
      }
    }
    console.log('Normalización completada.');
  } catch (error) {
    console.error('Error al normalizar nombres:', error);
  } finally {
    await prisma.$disconnect();
  }
}

normalizeAllShopNames();
