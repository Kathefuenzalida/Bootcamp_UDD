import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.URL_BD;
const dbName = "db_persons";
const collection = "users";

// Obtener todos los usuarios
export const getUsers = async () => {
  const client = new MongoClient(url);
  try {
    const db = client.db(dbName);
    const coll = db.collection(collection);
    return await coll.find({}).toArray();
  } finally {
    await client.close();
  }
};

// Insertar un usuario
export const addUser = async (user) => {
  const client = new MongoClient(url);
  try {
    await client.db(dbName).collection(collection).insertOne(user);
  } finally {
    await client.close();
  }
};

// Obtener un usuario por ID
export const getUserById = async (id) => {
  const client = new MongoClient(url);
  try {
    const coll = client.db(dbName).collection(collection);
    return await coll.findOne({ _id: new ObjectId(id) });
  } finally {
    await client.close();
  }
};

// Actualizar un usuario por ID
export const saveUser = async (id, user) => {
  const client = new MongoClient(url);
  try {
    const result = await client
      .db(dbName)
      .collection(collection)
      .updateOne({ _id: new ObjectId(id) }, { $set: user });
    return result;
  } finally {
    await client.close();
  }
};

// Eliminar un usuario
export const delUser = async (id) => {
  const client = new MongoClient(url);
  try {
    await client
      .db(dbName)
      .collection(collection)
      .deleteOne({ _id: new ObjectId(id) });
  } finally {
    await client.close();
  }
};
