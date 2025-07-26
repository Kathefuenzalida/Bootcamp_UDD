const express = require('express');
const app = express();
const PORT = 3000;
//Este es un middleware que viene con Express. Permite que Express pueda entender los datos JSON que mandas desde Postman.
app.use(express.json());

// Arreglo para almacenar las tareas
// Inicializamos un arreglo vacío para almacenar las tareas y un ID para la próxima tarea
let tareas = [];
let idActual = 1;

// GET /tareas - Ver todas las tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// POST /tareas - Agregar una nueva tarea
app.post('/tareas', (req, res) => {
  const { descripcion } = req.body;

  if (!descripcion || descripcion.trim() === '') {
    return res.status(400).json({ mensaje: 'La descripción es obligatoria' });
  }

  const nuevaTarea = {
    id: idActual++,
    descripcion,
    completada: false
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// PUT /tareas/:id - Marcar una tarea como completada
app.put('/tareas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);
//404: Lo que pediste no existe en el servidor.
  if (!tarea) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }

  tarea.completada = true;
  res.json({ mensaje: 'Tarea marcada como completada', tarea });
});

// DELETE /tareas/:id - Eliminar una tarea
app.delete('/tareas/:id', (req, res) => {
    //convierte texto en número
  const id = parseInt(req.params.id);
  const index = tareas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }

  tareas.splice(index, 1);
  res.json({ mensaje: 'Tarea eliminada con éxito' });
});

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
