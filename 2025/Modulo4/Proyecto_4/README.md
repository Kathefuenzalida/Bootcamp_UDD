# 📚 Proyecto 4: API de Reservas Hoteleras

Este proyecto consiste en el desarrollo de una API RESTful utilizando Node.js y Express para la gestión de reservas en hoteles. La API permite realizar operaciones CRUD (Create, Read, Update, Delete), además de varios filtros para buscar reservas por distintos criterios.

# 🚀 Despliegue en Render

🔗 [Ver API en Render](https://p4-ya0f.onrender.com/)

# 📄 Documentación Swagger

La API está documentada con Swagger (OpenAPI 3.0.3).

🔍 [Ver documentación Swagger](https://p4-ya0f.onrender.com/api-docs)

Incluye modelos definidos en `components > schemas` como:
- `Reserva`: Modelo completo de reserva con ID.
- `ReservaInput`: Modelo de entrada para crear o editar reservas.

# Tecnologías utilizadas

- Node.js  
- Express 
- Swagger (OpenAPI)
- Render (Hosting) 
- Nodemon (para desarrollo)  
- JavaScript
- Postman (para pruebas locales)

# 📁 Estructura del proyecto

reservas-api/
│
├── controllers/
│ └── reservasController.js // Lógica de negocio para las reservas
├── routes/
│ └── reservasRoutes.js // Definición de las rutas de la API
├── server.js // Punto de entrada de la aplicación
├── .env // Variables de entorno (puerto, etc.)
├── .gitignore // Ignorar node_modules, .env, etc.
├── package.json
└── README.md
└── prettierignore
└── prettierrc

## 🔌 Instalación y ejecución

1. Clonar el repositorio  
En bash:
git clone https://github.com/Kathefuenzalida/P4.git

2. Instalar dependencias

bash
Copiar código
npm install

3. Ejecutar el servidor

bash
Copiar código
npm run start
Por defecto, la API se ejecuta en:
📍 http://localhost:3000

📬 Endpoints disponibles
📍 Crear reserva
POST /api/reservas

Body (JSON):

json
Copiar código
{
  "hotel": "Hotel Paraíso",
  "tipo_habitacion": "doble",
  "num_huespedes": 2,
  "fecha": "2023-05-20",
  "estado": "confirmada"
}
📍 Obtener todas las reservas
GET /api/reservas

📍 Obtener una reserva por ID
GET /api/reservas/:id

📍 Actualizar una reserva
PUT /api/reservas/:id

Body (JSON):

json
Copiar código
{
  "estado": "pendiente"
}
📍 Eliminar una reserva
DELETE /api/reservas/:id

🔍 Filtros disponibles (todos por GET en /api/reservas)
?hotel=Hotel Paraíso

?estado=pendiente

?tipo_habitacion=doble

?num_huespedes=3

Filtrar por rango de fechas: 
Este filtro permite obtener reservas entre dos fechas específicas a través de los parámetros: 

fecha_inicio : Date (YYYY-MM-DD)

fecha_fin : Date (YYYY-MM-DD)

🧪 Herramientas para probar
Puedes usar herramientas como Postman, Insomnia o Thunder Client (VS Code) para realizar peticiones a la API.

✍️ Autora
Proyecto realizado por Katherine Fuenzalida como parte del Bootcamp Fullstack 2025.
👩‍💻 Ingeniera Civil Industrial y Product Owner.

📝 Notas
Los datos se almacenan en memoria, por lo que se reinician al apagar el servidor.

Este proyecto puede escalar fácilmente conectándolo a una base de datos como MongoDB. Las evidencias de ejecución de endpoints se encuentran en la carpeta del proyecto P4. 