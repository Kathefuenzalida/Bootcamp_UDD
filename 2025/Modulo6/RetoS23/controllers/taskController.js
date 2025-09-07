const Task = require('../models/Task');

// Crear tarea (solo admin)
exports.createTask = async (req, res) => {
  try {
    const { title, description, assignedTo, status } = req.body;
    const task = await Task.create({ title, description, assignedTo, status });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear tarea', error: error.message });
  }
};

// Obtener tareas
// - admin: todas
// - user: solo asignadas a él/ella
exports.getTasks = async (req, res) => {
  try {
    const filter = req.user.role === 'admin' ? {} : { assignedTo: req.user._id };
    const tasks = await Task.find(filter).populate('assignedTo', 'name email role');
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas' });
  }
};

// Obtener una tarea por id (solo asignado o admin)
exports.getTaskById = async (req, res) => {
  try {
    const t = await Task.findById(req.params.id).populate('assignedTo', 'name email role');
    if (!t) return res.status(404).json({ message: 'Tarea no encontrada' });

    if (req.user.role !== 'admin' && t.assignedTo._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'No autorizado' });
    }

    res.json(t);
  } catch (error) {
    res.status(400).json({ message: 'ID inválido' });
  }
};

// Actualizar tarea (solo asignado o admin)
exports.updateTask = async (req, res) => {
  try {
    const t = await Task.findById(req.params.id);
    if (!t) return res.status(404).json({ message: 'Tarea no encontrada' });

    if (req.user.role !== 'admin' && t.assignedTo.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'No autorizado' });
    }

    const fields = ['title', 'description', 'status', 'assignedTo'];
    fields.forEach((f) => {
      if (typeof req.body[f] !== 'undefined') t[f] = req.body[f];
    });

    const saved = await t.save();
    res.json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar', error: error.message });
  }
};

// Eliminar tarea (asignado o admin; si prefieres solo admin, cambia la condición)
exports.deleteTask = async (req, res) => {
  try {
    const t = await Task.findById(req.params.id);
    if (!t) return res.status(404).json({ message: 'Tarea no encontrada' });

    if (req.user.role !== 'admin' && t.assignedTo.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'No autorizado' });
    }

    await t.deleteOne();
    res.json({ success: true, message: 'Tarea eliminada' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar', error: error.message });
  }
};
