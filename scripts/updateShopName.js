// Script para actualizar el nombre de la tienda 'Deza' a 'deza' para el usuario 1
import { PrismaClient } from '../src/generated/prisma/index.js';
const prisma = new PrismaClient();

async function updateShopName(userId, oldName, newName) {
  try {
    const shop = await prisma.shop.findFirst({ where: { userId, name: oldName } });
    if (!shop) {
      console.log('No se encontró la tienda:', oldName);
      return;
    }
    await prisma.shop.update({ where: { id: shop.id }, data: { name: newName } });
    console.log(`Tienda actualizada: ${oldName} -> ${newName}`);
  } catch (error) {
    console.error('Error al actualizar nombre:', error);
  } finally {
    await prisma.$disconnect();
  }
}

updateShopName(1, 'Deza', 'deza');
