
import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", usuarioRoutes);

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
