const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generarToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Registro
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(400).json({ error: 'El email ya está registrado' });
    }

    const user = await User.create({ name, email, password, role });
    const token = generarToken(user);

    res.status(201).json({
      success: true,
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario' });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Validación simple
  if (!email || !password) {
    return res.status(400).json({ error: 'Ingresa email y password' });
  }

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ error: 'Credenciales inválidas' });

    const token = generarToken(user);
    res.json({
      success: true,
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error en el login' });
  }
};
