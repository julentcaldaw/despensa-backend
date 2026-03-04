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
    const shopMap = new Map();
    items.forEach(item => {
      const shopKey = item.shop ? item.shop.name : 'Sin tienda';
      if (!shopMap.has(shopKey)) shopMap.set(shopKey, []);
      shopMap.get(shopKey).push({
        id: item.id,
        ingredientId: item.ingredient.id,
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
  if (!Array.isArray(shoppingList) || !Array.isArray(shops) || typeof filters !== 'object') {
    return res.status(400).json({ error: 'Formato de datos inválido. Debe incluir shoppingList, shops y filters.' });
  }
  const allowedCategories = [
    'frutas_verduras',
    'carnes_pescados',
    'lacteos_huevos',
    'despensa_granos',
    'condimentos_aceites',
    'snacks_extras'
  ];
  const allowedStatus = ['pending', 'bought', 'deleted'];
  for (const item of shoppingList) {
    if (!item.ingredient || typeof item.ingredient !== 'string' || !item.shop || typeof item.shop !== 'string') {
      return res.status(400).json({ error: 'Cada elemento debe tener nombre y tienda válidos.' });
    }
    if (!item.category || typeof item.category !== 'string') {
      const found = await prisma.ingredient.findFirst({ where: { name: item.ingredient } });
      if (found && allowedCategories.includes(found.category)) {
        item.category = found.category;
      } else {
        return res.status(400).json({ error: `No se pudo determinar la categoría de ${item.ingredient}` });
      }
    }
    if (!allowedCategories.includes(item.category)) {
      return res.status(400).json({ error: `Categoría inválida: ${item.category}` });
    }
    if (item.status && !allowedStatus.includes(item.status)) {
      return res.status(400).json({ error: `Estado inválido: ${item.status}` });
    }
    if (!shops.includes(item.shop)) {
      return res.status(400).json({ error: `${item.shop} no está en la lista de tiendas del usuario.` });
    }
    if (item.addedAt && isNaN(Date.parse(item.addedAt))) {
      return res.status(400).json({ error: `addedAt debe estar en formato ISO.` });
    }
  }
  if (!req.user || !req.user.id) {
    return res.status(401).json({ error: 'Usuario no autenticado.' });
  }
  const allowedOrders = ['categoria', 'ultimo'];
  if (filters.order && !allowedOrders.includes(filters.order)) {
    return res.status(400).json({ error: `Criterio de orden inválido: ${filters.order}` });
  }
  try {
    const results = [];
    for (const item of shoppingList) {
      let ingredient = await prisma.ingredient.findFirst({
        where: {
          name: item.ingredient,
          category: item.category
        }
      });
      if (!ingredient) {
        try {
          ingredient = await prisma.ingredient.create({
            data: {
              name: item.ingredient,
              category: item.category
            }
          });
          console.info(`Ingrediente creado: ${item.ingredient} (${item.category})`);
          results.push({ info: `Ingrediente creado: ${item.ingredient}` });
        } catch (err) {
          console.error(`No se pudo crear ${item.ingredient}: ${err.message}`);
          results.push({ error: `No se pudo crear ${item.ingredient}: ${err.message}` });
          continue;
        }
      }
      let shop = await prisma.shop.findFirst({
        where: {
          name: item.shop,
          userId: req.user.id
        }
      });
      if (!shop) {
        console.info(`${item.shop} no encontrada `);
        shop = await prisma.shop.create({
          data: {
            name: item.shop,
            userId: req.user.id
          }
        });
        results.push({ info: `Tienda creada: ${item.shop}` });
      }
      const exists = await prisma.shoppingList.findFirst({
        where: {
          userId: req.user.id,
          ingredientId: ingredient.id
        }
      });
      if (exists) {
        console.info(`${item.ingredient} ingrediente ya en la lista: `);
        results.push({ info: `${item.ingredient} ya está en la lista de la compra.` });
        continue;
      }
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
        console.error(`No se pudo añadir ${item.ingredient}: ${err.message}`);
        results.push({ error: `No se pudo añadir ${item.ingredient} a la lista: ${err.message}` });
      }
    }
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
        ingredientId: item.ingredient.id,
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
    const item = await prisma.shoppingList.findUnique({ 
      where: { id: Number(id) },
      include: { ingredient: true }
    });
    if (!item) {
      return res.status(404).json({ error: 'Ingrediente no encontrado en la lista de la compra' });
    }
    if (item.userId !== req.user.id) {
      return res.status(403).json({ error: `No tienes permiso para eliminar ${item.ingredient}.` });
    }
    await prisma.shoppingList.delete({ where: { id: Number(id) } });
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
        ingredientId: item.ingredient.id,
        name: item.ingredient.name,
        category: item.ingredient.category,
        bought: item.bought || false
      });
    });
    const shoppingListGrouped = Array.from(shopMap.entries()).map(([shop, items]) => ({ shop, items }));
    res.json({ message: `${item.ingredient.name} eliminado de la lista de la compra`, shoppingList: shoppingListGrouped });
  } catch (error) {
    console.error('Error en deleteShoppingListItem:', error);
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

    const item = await prisma.shoppingList.findUnique({
      where: {
        id: Number(id)
      },
      include: {
        ingredient: true
      }
    }); 

    console.log('HOLA, ', item)

    if (!item) return res.status(404).json({ error: 'Ingrediente no encontrado en la lista' });
    if (item.userId !== req.user.id) {
      return res.status(403).json({ error: `No tienes permiso para modificar.` });
    }

    const exists = await prisma.pantry.findFirst({
      where: {
        userId: item.userId,
        ingredientId: item.ingredientId
      }

    });

    if (!exists) {
      await prisma.pantry.create({
        data: {
          userId: item.userId,
          ingredientId: item.ingredientId,
          category: item.ingredient.category
        }
      });
      await prisma.shoppingList.update({
        where: { id: Number(id) },
        data: { bought }
      });
      // Devuelve la lista actualizada
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
          ingredientId: item.ingredient.id,
          name: item.ingredient.name,
          category: item.ingredient.category,
          bought: item.bought || false
        });
      });
      const shoppingListGrouped = Array.from(shopMap.entries()).map(([shop, items]) => ({ shop, items }));
      return res.json({ message: `${item.ingredient.name} marcado como comprado y añadido a la despensa.`, shoppingList: shoppingListGrouped });
    }

    await prisma.shoppingList.update({
      where: { id: Number(id) },
      data: { bought }
    });
    // Devuelve la lista actualizada
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
        ingredientId: item.ingredient.id,
        name: item.ingredient.name,
        category: item.ingredient.category,
        bought: item.bought || false
      });
    });
    const shoppingListGrouped = Array.from(shopMap.entries()).map(([shop, items]) => ({ shop, items }));
    return res.json({ message: `${item.ingredient.name} marcado como ${bought ? 'comprado' : 'pendiente'}.`, shoppingList: shoppingListGrouped });
    

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

