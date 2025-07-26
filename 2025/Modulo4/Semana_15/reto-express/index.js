
//importoexpress y archivos de rutas
import express from "express";
import homeRoutes from "./routes/homeRoutes.js";
import productosRoutes from "./routes/productosRoutes.js";
//inicio la aplicación express
const app = express();
const port = process.env.PORT || 3000;

// Rutas
app.use("/", homeRoutes);//uso la ruta antes importada
app.use("/", productosRoutes);//uso la ruta antes importada

// Middleware 404
app.use((req, res) => {//si no se encuentra la ruta
  res.status(404).send("❌ Ruta no encontrada");
});
//inicio el servidor y muestra por consola que esta corriendo
app.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});
