import express from "express";//importo express

const router = express.Router();//crea mini servidor para agrupar rutas

const productos = [
  { id: 1, nombre: "Fogón Bowl", precio: 80000 },
  { id: 2, nombre: "Fogón Portátil", precio: 60000 },
  { id: 3, nombre: "Fogón Parrilla", precio: 120000 },
];
//creo la ruta correspondiente
router.get("/productos", (req, res) => {
    //convierte el array productos en formato JSON y lo manda al cliente ya sea navegador o app
  res.json(productos);
});

export default router;//exporto para usar en otro archivo
