import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Para manejar correctamente rutas en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usuariosPath = path.join(__dirname, "../data/usuarios.json");

// Crear nuevo usuario y guardarlo en el archivo
export async function crearUsuario(req, res) {
  const { nombre, email, password } = req.body;

  if (!nombre || !email || !password) {
    return res.status(400).send("Faltan datos obligatorios.");
  }

  try {
    const data = await fs.readFile(usuariosPath, "utf-8");
    const usuarios = JSON.parse(data);

    // Agrega nuevo usuario
    const nuevoUsuario = { nombre, email, password };
    usuarios.push(nuevoUsuario);

    // Guarda el array actualizado
    await fs.writeFile(usuariosPath, JSON.stringify(usuarios, null, 2));

    res.send("Usuario creado correctamente y guardado en archivo.");
  } catch (error) {
    console.error("Error al guardar usuario:", error);
    res.status(500).send("Error interno del servidor.");
  }
}

// Mostrar mensaje de bienvenida
export function mostrarPaginaDeBienvenida(req, res) {
  res.send(`¡Bienvenido, ${req.params.nombre}!`);
}
// Listar todos los usuarios
export async function listarUsuarios(req, res) {
  try {
    const data = await fs.readFile(usuariosPath, "utf-8");
    const usuarios = JSON.parse(data);
    res.json(usuarios);
  } catch (error) {
    console.error("Error al leer los usuarios:", error);
    res.status(500).send("Error al obtener la lista de usuarios.");
  }
}
