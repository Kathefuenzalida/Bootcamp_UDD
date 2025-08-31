const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String },
    fecha: { type: Date, required: true },
    ubicacion: { type: String },
    creadoEn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Evento', eventoSchema);
