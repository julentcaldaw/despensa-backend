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
    // Agrupar por tienda en formato array
    const shopMap = new Map();
    items.forEach(item => {
      const shopKey = item.shop ? item.shop.name : 'Sin tienda';
      if (!shopMap.has(shopKey)) shopMap.set(shopKey, []);
      shopMap.get(shopKey).push({
        id: item.id,
        name: item.ingredient.name,
        category: item.ingredient.category,
        bought: item.bought || false
      });
    });
    const shoppingListGrouped = Array.from(shopMap.entries()).map(([shop, items]) => ({ shop, items }));
    res.json(shoppingListGrouped);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addShoppingListItem = async (req, res) => {
  const { shoppingList, shops, filters } = req.body;
  // Validación básica
  if (!Array.isArray(shoppingList) || !Array.isArray(shops) || typeof filters !== 'object') {
    return res.status(400).json({ error: 'Formato de datos inválido. Debe incluir shoppingList, shops y filters.' });
  }
  // Validar cada ingrediente
  for (const item of shoppingList) {
    if (!item.ingredient || typeof item.ingredient !== 'string' || !item.shop || typeof item.shop !== 'string' || !item.category || typeof item.category !== 'string') {
      return res.status(400).json({ error: 'Cada elemento debe tener ingredient, shop y category válidos.' });
    }
    const allowedCategories = [
      'frutas_verduras',
      'carnes_pescados',
      'lacteos_huevos',
      'despensa_granos',
      'condimentos_aceites',
      'snacks_extras'
    ];
    if (!allowedCategories.includes(item.category)) {
      return res.status(400).json({ error: `Categoría inválida: ${item.category}` });
    }
    const allowedStatus = ['pending', 'bought', 'deleted'];
    if (item.status && !allowedStatus.includes(item.status)) {
      return res.status(400).json({ error: `Estado inválido: ${item.status}` });
    }
    if (!shops.includes(item.shop)) {
      return res.status(400).json({ error: `La tienda ${item.shop} no está en la lista de tiendas del usuario.` });
    }
    if (item.addedAt && isNaN(Date.parse(item.addedAt))) {
      return res.status(400).json({ error: `addedAt debe estar en formato ISO.` });
    }
  }
  // Validar usuario autenticado
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: 'Usuario no autenticado.' });
  }
  // Validar filtros
  const allowedOrders = ['categoria', 'ultimo'];
  if (filters.order && !allowedOrders.includes(filters.order)) {
    return res.status(400).json({ error: `Criterio de orden inválido: ${filters.order}` });
  }
  // Guardar cada ingrediente en la lista
  try {
    const results = [];
    for (const item of shoppingList) {
      // Buscar el ingrediente por nombre y categoría
      let ingredient = await prisma.ingredient.findFirst({
        where: {
          name: item.ingredient,
          category: item.category
        }
      });
      if (!ingredient) {
        // Crear el ingrediente si no existe
        try {
          ingredient = await prisma.ingredient.create({
            data: {
              name: item.ingredient,
              category: item.category
            }
          });
          console.info(`[INFO] Ingrediente creado: ${item.ingredient} (${item.category})`);
          results.push({ info: `Ingrediente creado: ${item.ingredient}` });
        } catch (err) {
          console.error(`[ERROR] No se pudo crear el ingrediente ${item.ingredient}: ${err.message}`);
          results.push({ error: `No se pudo crear el ingrediente ${item.ingredient}: ${err.message}` });
          continue;
        }
      }
      // Buscar o crear la tienda por nombre, asociada al usuario autenticado
      let shop = await prisma.shop.findFirst({
        where: {
          name: item.shop,
          userId: req.user.id
        }
      });
      if (!shop) {
        console.info(`[INFO] Tienda no encontrada, creando: ${item.shop}`);
        // Crear la tienda si no existe
        shop = await prisma.shop.create({
          data: {
            name: item.shop,
            userId: req.user.id
          }
        });
        results.push({ info: `Tienda creada: ${item.shop}` });
      }
      // Verificar si ya existe el ingrediente en la lista para este usuario
      const exists = await prisma.shoppingList.findFirst({
        where: {
          userId: req.user.id,
          ingredientId: ingredient.id
        }
      });
      if (exists) {
        console.info(`[INFO] Ingrediente ya en la lista: ${item.ingredient}`);
        results.push({ info: `El ingrediente ${item.ingredient} ya está en la lista de la compra.` });
        continue;
      }
      // Crear el item en la lista de la compra, asociando al usuario autenticado
      try {
        const shoppingItem = await prisma.shoppingList.create({
          data: {
            userId: req.user.id,
            ingredientId: ingredient.id,
            shopId: shop.id,
            addedAt: item.addedAt ? new Date(item.addedAt) : undefined
          }
        });
        results.push({ success: true, item: shoppingItem });
      } catch (err) {
        console.error(`[ERROR] No se pudo añadir el ingrediente ${item.ingredient}: ${err.message}`);
        results.push({ error: `No se pudo añadir el ingrediente ${item.ingredient} a la lista: ${err.message}` });
      }
    }
    // Obtener la lista de compra actualizada del usuario (formato array agrupado)
    const items = await prisma.shoppingList.findMany({
      where: { userId: req.user.id },
      include: {
        ingredient: { select: { id: true, name: true, category: true } },
        shop: { select: { id: true, name: true } }
      }
    });
    const shopMap = new Map();
    items.forEach(item => {
      const shopKey = item.shop ? item.shop.name : 'Sin tienda';
      if (!shopMap.has(shopKey)) shopMap.set(shopKey, []);
      shopMap.get(shopKey).push({
        id: item.id,
        name: item.ingredient.name,
        category: item.ingredient.category,
        bought: item.bought || false
      });
    });
    const shoppingListGrouped = Array.from(shopMap.entries()).map(([shop, items]) => ({ shop, items }));
    res.status(201).json({ results, shoppingList: shoppingListGrouped });
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

  export const updateBoughtStatus = async (req, res) => {
    const { id } = req.params;
    const { bought } = req.body;
    if (typeof bought !== 'boolean') {
      return res.status(400).json({ error: 'El estado comprado debe ser booleano.' });
    }
    try {
      const item = await prisma.shoppingList.update({
        where: { id: Number(id) },
        data: { bought }
      });
      res.json(item);
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
