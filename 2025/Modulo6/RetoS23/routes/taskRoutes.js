const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// CRUD de tareas
router.post('/', protect, authorize('admin'), createTask);       // Crear
router.get('/', protect, getTasks);                              // Listar
router.get('/:id', protect, getTaskById);                        // Obtener 1
router.put('/:id', protect, updateTask);                         // Actualizar
router.delete('/:id', protect, deleteTask);                      // Eliminar

module.exports = router;
