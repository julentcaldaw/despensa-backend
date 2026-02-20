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
    res.json({ id: user.id, username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
