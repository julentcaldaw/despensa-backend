
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const savePurchase = async (req, res) => {
  try {
    const { userId, ingredientId, shopId, quantity } = req.body;
    const purchase = await prisma.purchaseHistory.create({
      data: {
        userId,
        ingredientId,
        shopId,
        quantity,
        purchaseDate: new Date(),
      },
    });
    res.status(201).json(purchase);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el historial de compra', details: error.message });
  }
};

export const getPurchaseHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const history = await prisma.purchaseHistory.findMany({
      where: { userId: Number(userId) },
      include: {
        ingredient: true,
        shop: true,
      },
      orderBy: { purchaseDate: 'desc' },
    });
    res.json(history);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial', details: error.message });
  }
};
