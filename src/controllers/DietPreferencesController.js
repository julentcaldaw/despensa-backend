import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getDietPreferences = async (req, res) => {
	try {
		const userId = req.user.id;
		const user = await prisma.user.findUnique({
			where: { id: userId },
			select: { dietPreferences: true }
		});
		if (!user) {
			return res.status(404).json({ message: 'Usuario no encontrado.' });
		}
		res.json({ preferences: user.dietPreferences || [] });
	} catch (error) {
		res.status(500).json({ message: 'Error al obtener preferencias.', error: error.message });
	}
};

export const saveDietPreferences = async (req, res) => {
	try {
		console.log('DEBUG saveDietPreferences req.user:', req.user);
		console.log('DEBUG saveDietPreferences req.body:', req.body);
		const userId = req.user.id;
		const { preferences } = req.body;
		const validPreferences = [
			'none',
			'vegetarian',
			'lacto_vegetarian',
			'ovo_vegetarian',
			'vegan',
			'pescetarian',
			'keto',
			'paleo'
		];
		if (!Array.isArray(preferences)) {
			return res.status(400).json({ message: 'Las preferencias deben ser un array.' });
		}
		const invalid = preferences.filter(p => !validPreferences.includes(p));
		if (invalid.length > 0) {
			return res.status(400).json({ message: 'Preferencias inválidas detectadas.', invalid });
		}
		if (parseInt(userId) !== parseInt(req.user.id)) {
			return res.status(403).json({ message: 'No autorizado para modificar estas preferencias.' });
		}
		const updatedUser = await prisma.user.update({
			where: { id: userId },
			data: { dietPreferences: preferences }
		});
		res.json({ message: 'Preferencias actualizadas correctamente.', preferences: updatedUser.dietPreferences });
	} catch (error) {
		if (error.code === 'P2025') {
			return res.status(404).json({ message: 'Usuario no encontrado.' });
		}
		res.status(500).json({ message: 'Error al guardar preferencias.', error: error.message });
	}
};
