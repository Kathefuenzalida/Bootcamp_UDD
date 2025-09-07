require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');  // OJO: nombre exacto
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (_req, res) => res.send('API Reto 23 funcionando'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor atenti en puerto ${PORT}`));
