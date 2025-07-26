const express = require('express');
const dotenv = require('dotenv');
const reservasRoutes = require('./routes/reservasRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para leer JSON
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/reservas', reservasRoutes); // Rutas principales
app.get('/', (req, res) => {
  res.send('API Reservas funcionando correctamente');
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});