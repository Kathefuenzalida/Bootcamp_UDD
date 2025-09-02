require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const User = require('./models/User');
const Guitar = require('./models/Guitar');

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();
//middlewares
app.use(express.json());

app.get('/guitars', async(req, res)=>{
    try {
        const guitars = await Guitar.find({});
        return res.status(200).json({ guitars });
    } catch (error) {
        return res.status(500).json({
            message: 'error al obtener las guitarras' , error: error.message});
    }
    }
)//localhost:3000/guitars


app.post('/guitars', async(req, res)=>{
    try {
        const { name, price } = req.body;
        const newGuitar = await Guitar.create({ name, price });
        if (!newGuitar) return res.status(400).json({ error: 'no se pudo crear la guitarra' });
        return res.status(201).json({ datos: newGuitar });
    } catch (error) {

        return res.status(500).json({
            message: 'error al crear la guitarra' , error: error.message});

    }
    }
)

app.put('/guitars/:id', async(req, res)=>{
    try {
        const {name, price} = req.body;
        const updatedGuitar = await Guitar.findByIdAndUpdate(
            req.params.id,
            {name, price},
            {new: true, runValidators: true}
        );
        if(!updatedGuitar) return res.status(400).json({message: 'no se pudo actualizar la guitarra'});
        return res.status(200).json({guitarraActualizada: updatedGuitar}); 
    } catch (error) {
        return res.status(500).json({
            message: 'error al actualizar la guitarra', error: error.message
        });
    }})

app.delete('/guitars/:id', async(req, res)=>{
    try {
        const deletedGuitar = await Guitar.findByIdAndDelete(req.params.id);
        if(!deletedGuitar) return res.status(400).json({message: 'Guitarra no encontrada'});
        return res.status(200).json({guitarraEliminada: deletedGuitar});
    } catch (error) {
        return res.status(500).json({
            message: 'error al eliminar la guitarra', error: error.message
        });
    }
})


app.post('/users', async(req, res)=>{
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password });
        if (!newUser) return res.status(400).json({ error: 'no se pudo crear el usuario' });
        return res.status(201).json({ datos: newUser });
    } catch (error) {

        return res.status(500).json({
            message: 'error al crear el usuario' , error: error.message});

    }
    }
)


app.get('/users', async(req, res)=>{
    try {
        const users = await User.find({});
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({
            message: 'error al obtener los usuarios' , error: error.message});
    }
    }
)//localhost:3000/users



app.put('/users/:id', async(req, res)=>{
    try {
        const {username, email, password} = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {username, email, password},
            {new: true, runValidators: true}
        );
        if(!updatedUser) return res.status(400).json({message: 'no se pudo actualizar el usuario'});
        return res.status(200).json({usuarioActualizado: updatedUser}); 
    } catch (error) {
        return res.status(500).json({
            message: 'error al actualizar el usuario', error: error.message
        });
    }})
app.delete('/users/:id', async(req, res)=>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser) return res.status(400).json({message: 'Usuario no encontrado'});
        return res.status(200).json({usuarioEliminado: deletedUser});
    } catch (error) {
        return res.status(500).json({
            message: 'error al eliminar el usuario', error: error.message
        });
    }
})
app.listen(PORT, ()=>{
    console.log(`Atenti: servidor corriendo en el puerto: `, PORT);
})