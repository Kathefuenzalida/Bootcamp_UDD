import express from "express";//importo el framework

const router = express.Router();//creo mini servidor para agr
//cuando se visite la ruta debe indicar este mensaje
router.get("/", (req, res) => {
  res.send("👋 Bienvenida a la página de inicio");
});

export default router;//exporto para usarlo en otro archivo
