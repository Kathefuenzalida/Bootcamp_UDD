const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
app.use(express.json());

const urlBD = process.env.URL_BD || 'mongodb://localhost:27017'; // URL local por defecto
const dbName = 'proyecto'; // tu base de datos local
const collectionName = 'mascotas';

// 🔹 GET todas las mascotas
app.get('/mascotas', async (req, res) => {
  const client = new MongoClient(urlBD);
  try {
    await client.connect();
    const db = client.db(dbName);
    const mascotas = await db.collection(collectionName).find({}).toArray();
    res.json(mascotas);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  } finally {
    await client.close();
  }
});

// 🔹 GET mascota por ID
app.get('/mascotas/:id', async (req, res) => {
  const client = new MongoClient(urlBD);
  try {
    await client.connect();
    const db = client.db(dbName);
    const mascota = await db.collection(collectionName).findOne({ _id: new ObjectId(req.params.id) });
    if (!mascota) return res.status(404).send("Mascota no encontrada");
    res.json(mascota);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  } finally {
    await client.close();
  }
});

// 🔹 POST insertar una mascota
app.post('/mascotas', async (req, res) => {
  const client = new MongoClient(urlBD);
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collectionName).insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  } finally {
    await client.close();
  }
});

// 🔹 PUT actualizar una mascota por ID
app.put('/mascotas/:id', async (req, res) => {
  const client = new MongoClient(urlBD);
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collectionName).updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0) return res.status(404).send("Mascota no encontrada");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  } finally {
    await client.close();
  }
});

// 🔹 DELETE eliminar una mascota por ID
app.delete('/mascotas/:id', async (req, res) => {
  const client = new MongoClient(urlBD);
  try {
    await client.connect();
    const db = client.db(dbName);
    const result = await db.collection(collectionName).deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).send("Mascota no encontrada");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  } finally {
    await client.close();
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Atenti en puerto ${process.env.PORT || 3000}`);
});
