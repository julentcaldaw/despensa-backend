import { PrismaClient } from '../src/generated/prisma/index.js';
const prisma = new PrismaClient();

async function showUserShops(userId) {
  try {
    const shops = await prisma.shop.findMany({ where: { userId } });
    shops.forEach(s => console.log('ID:', s.id, 'NAME:', JSON.stringify(s.name)));
  } catch (error) {
    console.error('Error al consultar tiendas:', error);
  } finally {
    await prisma.$disconnect();
  }
}

showUserShops(1); 
