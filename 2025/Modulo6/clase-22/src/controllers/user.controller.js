const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Crear usuario
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({ username, email, password: hashedPassword });
    return res.status(201).json({ datos: newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

// Login usuario
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    if (!foundUser) return res.status(400).json({ message: 'Usuario no encontrado' });

    const correctPassword = await bcrypt.compare(password, foundUser.password);
    if (!correctPassword) return res.status(400).json({ message: 'Contraseña incorrecta' });

    const payload = { user: { id: foundUser._id } };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en login', error: error.message });
  }
};