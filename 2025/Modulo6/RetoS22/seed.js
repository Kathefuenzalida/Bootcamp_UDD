require('dotenv').config();
const mongoose = require('mongoose');
const Evento = require('./models/Evento'); // asegúrate de que la ruta sea correcta

// Conectar a MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('MongoDB conectado');

        // Eventos de prueba
        const eventos = [
            { titulo: "Concierto de Jazz", descripcion: "Evento en el parque central", fecha: "2025-09-10", ubicacion: "Parque Central" },
            { titulo: "Feria de Tecnología", descripcion: "Exposición de gadgets y robots", fecha: "2025-10-05", ubicacion: "Centro de Convenciones" },
            { titulo: "Maratón Ciudad", descripcion: "Competencia deportiva anual", fecha: "2025-11-01", ubicacion: "Avenida Principal" },
            { titulo: "Festival de Cine", descripcion: "Proyección de películas locales", fecha: "2025-12-15", ubicacion: "Cine Municipal" },
            { titulo: "Exposición de Arte", descripcion: "Muestra de artistas emergentes", fecha: "2025-12-20", ubicacion: "Galería Central" }
        ];

        // Insertar eventos en la DB
        await Evento.insertMany(eventos);
        console.log('Eventos de prueba agregados correctamente');

        mongoose.disconnect();
    })
    .catch(err => console.log(err));
