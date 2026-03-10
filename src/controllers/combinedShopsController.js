import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Devuelve la lista combinada de tiendas del usuario y del historial de compras
export const getCombinedShops = async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    // Tiendas guardadas por el usuario
    const myShops = await prisma.shop.findMany({
      where: { userId },
      select: { id: true, name: true }
    });
    // Tiendas del historial de compras
    const historyShops = await prisma.purchaseHistory.findMany({
      where: { userId },
      select: { shop: { select: { id: true, name: true } } },
      distinct: ['shopId']
    });
    // Extraer tiendas únicas del historial (ignorando nulls y duplicados)
    const myShopIds = new Set(myShops.map(s => s.id));
    const extraShops = historyShops
      .map(h => h.shop)
      .filter(shop => shop && !myShopIds.has(shop.id));
    // Combinar y marcar la fuente
    const shops = [
      ...myShops.map(s => ({ ...s, source: 'myshops' })),
      ...extraShops.map(s => ({ ...s, source: 'history' }))
    ];
    res.json({ shops });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener tiendas combinadas', details: error.message });
  }
};
