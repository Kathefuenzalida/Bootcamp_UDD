require('dotenv').config();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const express = require('express');
const connectDB = require('./config/db');

const userRoutes = require('./routes/user.routes');
const guitarRoutes = require('./routes/guitar.routes');
const User = require('./models/User');

console.log('🔍 Variables de entorno cargadas:', process.env.MONGO_URI, process.env.PORT);
// Conexión a MongoDB
connectDB();
// Inicializar Express
const app = express();

// Middlewares
const allowedOrigins = [
  'http://tu-proyecto-netlify.app',
  'http://otro-proyecto-netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());



// Rutas
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/guitars', guitarRoutes);

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en puerto ${PORT}`);
});
