require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const connectDB = require('./config/db');

const userRoutes = require('./routes/user.routes');
const guitarRoutes = require('./routes/guitar.routes');

const User = require('./models/User');
require('dotenv').config();
console.log('🔍 Variables de entorno cargadas:', process.env.MONGO_URI, process.env.PORT);

const app = express();

app.use(express.json());
connectDB();
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/guitars', guitarRoutes);

// Conexión a Mongo


// Montar rutas de usuario
// Ejemplo: POST http://localhost:3000/api/v1/users/create
app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
}); 