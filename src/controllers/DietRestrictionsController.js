

import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export const getDietRestrictions = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { dietRestrictions: true }
    });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.json({ restrictions: user.dietRestrictions || [] });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener restricciones.', error: error.message });
  }
};

export const saveDietRestrictions = async (req, res) => {
  try {
    console.log('DEBUG saveDietRestrictions req.user:', req.user);
    console.log('DEBUG saveDietRestrictions req.body:', req.body);
    const userId = req.user.id;
    const { restrictions } = req.body;
    // Validación básica
    if (!Array.isArray(restrictions)) {
      return res.status(400).json({ message: 'Las restricciones deben ser un array.' });
    }
    // Solo el usuario autenticado puede modificar sus restricciones
    if (parseInt(userId) !== parseInt(req.user.id)) {
      return res.status(403).json({ message: 'No autorizado para modificar estas restricciones.' });
    }
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { dietRestrictions: restrictions }
    });
    res.json({ message: 'Restricciones actualizadas correctamente.', restrictions: updatedUser.dietRestrictions });
  } catch (error) {
    console.error('ERROR saveDietRestrictions:', error);
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.status(500).json({ message: 'Error al guardar restricciones.', error: error.message });
  }
};

import express from 'express';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();
router.get('/', authenticateToken, getDietRestrictions);
router.post('/', authenticateToken, saveDietRestrictions);

export default router;
