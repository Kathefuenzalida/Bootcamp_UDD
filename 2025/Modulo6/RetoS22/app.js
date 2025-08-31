require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Conectar a MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log(err));

// Modelo Evento
const eventoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String },
    fecha: { type: Date, required: true },
    ubicacion: { type: String },
    creadoEn: { type: Date, default: Date.now }
});
const Evento = mongoose.model('Evento', eventoSchema);

// Rutas

// Página principal: lista todos los eventos
app.get('/', async (req, res) => {
    try {
        const eventos = await Evento.find();
        res.render('index', { eventos });
    } catch (error) {
        res.send(error);
    }
});

// Formulario para crear un nuevo evento
app.get('/eventos/nuevo', (req, res) => {
    res.render('nuevo');
});

// Crear un evento
app.post('/eventos', async (req, res) => {
    try {
        const evento = new Evento(req.body);
        await evento.save();
        res.redirect('/');
    } catch (error) {
        res.send(error);
    }
});

// Formulario para editar un evento existente
app.get('/eventos/:id/editar', async (req, res) => {
    try {
        const evento = await Evento.findById(req.params.id);
        res.render('editar', { evento });
    } catch (error) {
        res.send(error);
    }
});

// Actualizar un evento
app.put('/eventos/:id', async (req, res) => {
    try {
        await Evento.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/');
    } catch (error) {
        res.send(error);
    }
});

// Eliminar un evento
app.delete('/eventos/:id', async (req, res) => {
    try {
        await Evento.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.send(error);
    }
});

// Inicia servidor
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}`));
