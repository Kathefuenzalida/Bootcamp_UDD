const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Título es requerido'] },
    description: { type: String, default: '' },
    status: {
      type: String,
      enum: ['pending', 'in_progress', 'done'],
      default: 'pending'
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'assignedTo es requerido']
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
