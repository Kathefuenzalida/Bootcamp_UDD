import express from "express";
import {
  crearUsuario,
  mostrarPaginaDeBienvenida,
  listarUsuarios
} from "../controllers/usuariocontroller.js";

const router = express.Router();

router.post("/usuario", crearUsuario);
router.get("/bienvenida/:nombre", mostrarPaginaDeBienvenida);
router.get("/usuarios", listarUsuarios); // 👉 Nueva ruta

export default router;
