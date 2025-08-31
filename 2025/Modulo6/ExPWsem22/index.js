const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Guitarra = require('./models/Guitarra');

require('dotenv').config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conectar a DB
connectDB();

// Rutas
app.post('/crear-guitarra', async (req, res) => {
  try {
    const nuevaGuitarra = new Guitarra(req.body);
    await nuevaGuitarra.save();
    res.status(201).json(nuevaGuitarra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/guitarras', async (req, res) => {
  try {
    const guitarras = await Guitarra.find();
    res.json(guitarras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// PUT: actualizar una guitarra por ID
app.put('/actualizar-guitarra/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const guitarraActualizada = await Guitarra.findByIdAndUpdate(id, req.body, { new: true });
    if (!guitarraActualizada) {
      return res.status(404).json({ error: "Guitarra no encontrada" });
    }
    res.json(guitarraActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: borrar una guitarra por ID
app.delete('/borrar-guitarra/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const guitarraBorrada = await Guitarra.findByIdAndDelete(id);
    if (!guitarraBorrada) {
      return res.status(404).json({ error: "Guitarra no encontrada" });
    }
    res.json({ message: "Guitarra eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
