import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

// Obtiene el detalle de una receta por ID
export async function getRecipeDetail(req, res) {
  const { id } = req.params;
  try {
    const recipe = await prisma.recipe.findUnique({
      where: { id: Number(id) },
      include: {
        ingredients: {
          include: {
            ingredient: true,
          },
        },
      },
    });
    if (!recipe) {
      return res.status(404).json({ error: 'Receta no encontrada' });
    }
    // Formatear ingredientes
    const formattedIngredients = recipe.ingredients.map(ri => ({
      id: ri.ingredient.id,
      name: ri.ingredient.name,
      category: ri.ingredient.category,
      quantity: ri.quantity,
      unit: ri.unit,
    }));
    // Respuesta con todos los campos relevantes
    res.json({
      id: recipe.id,
      name: recipe.name,
      description: recipe.description,
      steps: recipe.preparationSteps,
      prepTime: recipe.preparationTime,
      dietRestrictions: recipe.dietRestrictions,
      dietPreferences: recipe.dietPreferences,
      nutrition: recipe.nutritionInfo,
      ingredients: formattedIngredients,
      createdAt: recipe.createdAt,
      updatedAt: recipe.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la receta', details: error.message });
  }
}
