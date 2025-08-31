import express from "express";
import {
  getAllPets,
  getPetById,
  addPet,
  updatePet,
  deletePet,
} from "./crud.js";

const app = express();
app.use(express.json());

// Home simple
app.get("/", (req, res) => {
  res.send(`
    <h1>API de Mascotas 🐶🐱</h1>
    <p>Usa <a href="/mascotas">/mascotas</a> para ver todas las mascotas.</p>
    <p>Endpoints:</p>
    <ul>
      <li>GET /mascotas</li>
      <li>GET /mascotas/:id</li>
      <li>POST /mascotas</li>
      <li>PUT /mascotas/:id</li>
      <li>DELETE /mascotas/:id</li>
    </ul>
  `);
});

// GET todas (findAll)
app.get("/mascotas", async (req, res) => {
  try {
    const pets = await getAllPets();
    res.json(pets);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error en el servidor");
  }
});

// GET por id (findOne)
app.get("/mascotas/:id", async (req, res) => {
  try {
    const pet = await getPetById(req.params.id);
    if (!pet) return res.status(404).send("Mascota no encontrada");
    res.json(pet);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error en el servidor");
  }
});

// POST crear (insertOne)
app.post("/mascotas", async (req, res) => {
  try {
    const result = await addPet(req.body);
    res.status(201).json(result);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error en el servidor");
  }
});

// PUT actualizar (updateOne)
app.put("/mascotas/:id", async (req, res) => {
  try {
    const result = await updatePet(req.params.id, req.body);
    if (result.matchedCount === 0)
      return res.status(404).send("Mascota no encontrada");
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error en el servidor");
  }
});

// DELETE eliminar (deleteOne)
app.delete("/mascotas/:id", async (req, res) => {
  try {
    const result = await deletePet(req.params.id);
    if (result.deletedCount === 0)
      return res.status(404).send("Mascota no encontrada");
    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error en el servidor");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
);
