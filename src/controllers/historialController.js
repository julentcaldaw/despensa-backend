import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/**
 * GET /api/historial
 * Devuelve el historial de ingredientes comprados por el usuario autenticado
 */
export const getHistorial = async (req, res) => {
  try {
    const userId = req.user && req.user.id;
    if (!userId) {
      return res.status(401).json({ error: 'No autenticado' });
    }

    // Buscar ingredientes comprados por el usuario
    const compras = await prisma.purchaseHistory.findMany({
      where: { userId },
      include: {
        ingredient: true,
        shop: true
      },
      orderBy: { purchaseDate: 'desc' }
    });

    const historial = compras.map(compra => ({
      name: compra.ingredient?.name || '',
      shop: compra.shop?.name || '',
      boughtDate: compra.purchaseDate
    }));

    return res.json(historial);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};
