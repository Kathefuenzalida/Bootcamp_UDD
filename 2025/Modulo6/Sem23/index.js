// 1. importaciones
const express = require('express')
const app = express()      
const cors = require('cors')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const connectDB = require('./config/db')
const Guitarra = require('./models/Guitarra')
const Usuario = require('./models/Usuario')
const auth = require('./middleware/authorization')

// 2. middlewares
require('dotenv').config() // variables de entorno
connectDB() // conexión a la base de datos
app.use(cors()) // habilitar CORS
app.use(express.json()); // parseo de JSON

// 3. ruteo
// A. Guitarras

// Obtener todas las guitarras
app.get("/obtener-guitarras", async (req, res) => {
    try {
        const guitarras = await Guitarra.find({})
        res.json({ guitarras })
    } catch (error) {
        res.status(500).json({ msg: "Error obteniendo guitarras" })
    }
})

// Crear una guitarra
app.post("/crear-guitarra", async(req, res) => {
    const { nombre, precio } = req.body
    try {
        const nuevaGuitarra = await Guitarra.create({ nombre, precio })
        res.json(nuevaGuitarra)
    } catch (error) {
        res.status(500).json({ msg: "Error creando guitarra" })
    }
})

// Actualizar guitarra
app.put("/actualizar-guitarra", async (req, res) => {
    const { id, nombre, precio } = req.body
    try {
        const actualizacionGuitarra = 
	        await Guitarra.findByIdAndUpdate(id, { nombre, precio }, { new: true })
        res.json(actualizacionGuitarra)
    } catch (error) {       
        res.status(500).json({ msg: "Error actualizando guitarra" })
    }
})

// Borrar guitarra
app.delete("/borrar-guitarra", async (req, res) => {
    const { id } = req.body
    try {
        const guitarraBorrada = await Guitarra.findByIdAndRemove({_id: id })
        res.json(guitarraBorrada)
    } catch (error) {
        res.status(500).json({ msg: "Error borrando guitarra" })
    }
})

// B. Usuarios

// Crear un usuario
app.post("/usuario/crear", async (req, res) => {
    const { username, email, password } = req.body    
    try {
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        const respuestaDB = await Usuario.create({
            username, 
            email, 
            password: hashedPassword
        })
        return res.json(respuestaDB)
    } catch (error) {
        return res.status(400).json({ msg: error })
    }
})

// Iniciar sesión
app.post("/usuario/iniciar-sesion", async(req, res) => {
    const {email, password} = req.body
    try {
        let foundUser = await Usuario.findOne({email})
        if(!foundUser){
            return res.status(400).json({msg: "El usuario no existe"})
        }
        const passCorrecto = await bcryptjs.compare(password, foundUser.password)
        if(!passCorrecto){
            return res.status(400).json({msg: "Usuario o contraseña incorrecta"})
        }

        const payload = { user: { id: foundUser.id } }
        jwt.sign(
            payload, 
            process.env.SECRET,
            { expiresIn: 3600000 }, 
            (error, token) => {
                if(error) throw error;
                res.json({token})
	    })
    } catch (error) {
        res.status(500).json({ msg: "Error iniciando sesión", error })
    }
})

// Verificar usuario (ruta faltante)
app.get("/usuario/verificar-usuario", auth, async (req, res) => {
	try {
		const usuario = await Usuario.findById(req.user.id).select('-password')
		res.json({ usuario })
	} catch (error) {
		res.status(500).json({ msg: "Error verificando usuario", error })
	}
})

// 4. servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))
