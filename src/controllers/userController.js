export const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(400).json({ error: 'Refresh token requerido' });
  }
  try {
    const user = await prisma.user.findFirst({ where: { refreshToken } });
    if (!user) {
      return res.status(403).json({ error: 'Refresh token inválido' });
    }
    jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Refresh token inválido' });
        const token = jwt.sign(
          { id: user.id, username: user.username, email: user.email },
          process.env.JWT_SECRET,
          { expiresIn: '2h' }
        );
        // Configurar cookie segura para el token si es necesario
        const isProduction = process.env.NODE_ENV === 'production';
        res.cookie('token', token, {
          httpOnly: true,
          secure: isProduction,
          sameSite: isProduction ? 'none' : 'lax',
          maxAge: 2 * 60 * 60 * 1000 // 2 horas
        });
        res.json({ token });
      }
    );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
import { PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();


export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Intentando registrar usuario:', { username, email });
  if (!username || !email || !password) {
    console.error('Faltan campos obligatorios:', { username, email, password });
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }
  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      console.warn('El email ya está registrado:', email);
      return res.status(409).json({ error: 'El email ya está registrado' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({ data: { username, email, password: hashedPassword } });
    console.log('Usuario creado correctamente:', { id: user.id, username: user.username, email: user.email });
    res.status(201).json({ message: 'Usuario registrado', user: { id: user.id, username: user.username, email: user.email } });
  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log('Intentando login:', { email });
  if (!email || !password) {
    console.error('Faltan campos en login:', { email, password });
    return res.status(400).json({ error: 'Email y contraseña son obligatorios' });
  }
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      console.warn('Usuario no encontrado para email:', email);
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.warn('Contraseña inválida para email:', email);
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
    const refreshToken = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    await prisma.user.update({ where: { id: user.id }, data: { refreshToken } });
    console.log('Login exitoso para usuario:', { id: user.id, email: user.email });
    const isProduction = process.env.NODE_ENV === 'production';
    res.cookie('token', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 2 * 60 * 60 * 1000 
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? 'none' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 
    });
    res.json({
      message: 'Login exitoso',
      token,
      refreshToken,
      user: { id: user.id, username: user.username, email: user.email }
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ error: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });


    const shoppingListCount = await prisma.shoppingList.count({ where: { userId: req.user.id } });
    const pantryCount = await prisma.pantry.count({ where: { userId: req.user.id } });

    const stats = user.stats || {
      recetasGuardadas: 0,
      itemsDespensa: 0,
      aportaciones: 0
    };

    const settings = user.settings || [
      { label: "Restricciones Alimenticias", key: "restricciones", value: [] },
      { label: "Preferencias de Dieta", key: "dieta", value: "Omnívoro" },
      { label: "Notificaciones", key: "notificaciones", value: true },
      { label: "Cerrar Sesión", key: "logout" }
    ];

    let avatar = user.avatar;
    if (!avatar || typeof avatar !== 'string' || avatar.trim() === '') {
      avatar = 'avatar.jpg';
    }
    res.json({
      name: user.username,
      email: user.email,
      avatar,
      stats,
      shoppingListCount,
      pantryCount,
      settings
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateProfile = async (req, res) => {
  const { name, email, avatar, settings } = req.body;
  try {
    if (email && typeof email !== 'string') return res.status(400).json({ error: 'Email inválido' });
    if (name && typeof name !== 'string') return res.status(400).json({ error: 'Nombre inválido' });
    if (avatar && typeof avatar !== 'string') return res.status(400).json({ error: 'Avatar inválido' });
    const updated = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        username: name,
        email,
        avatar,
        settings
      }
    });
    res.json({
      id: updated.id,
      name: updated.username,
      email: updated.email,
      avatar: updated.avatar,
      stats: updated.stats,
      settings: updated.settings
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserStats = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user.stats || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
