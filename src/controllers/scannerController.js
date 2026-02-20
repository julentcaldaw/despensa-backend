import axios from 'axios';

export const scanBarcode = async (req, res) => {
  const { barcode } = req.body;
  if (!barcode) {
    return res.status(400).json({ error: 'Falta el código de barras.' });
  }
  try {
    const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;
    const response = await axios.get(url);
    const product = response.data.product;
    if (!product) {
      return res.status(404).json({ error: 'Producto no encontrado.' });
    }
    const result = {
      name: product.product_name || '',
      image: product.image_front_url || '',
      brand: product.brands || '',
      category: product.categories || ''
    };
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error consultando OpenFoodFacts.' });
  }
};
