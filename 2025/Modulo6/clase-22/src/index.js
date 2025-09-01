require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const User = require('./models/User');
const Guitar = require('./models/Guitar');

const PORT = process.env.PORT || 5000;

const app = express();
connectDB();

app.get('/guitars', async(req, res)=>{
    try {
        const guitars = await Guitar.find({});
        return res.status(200).json({guitars });
    } catch (error) {
        return res.status(500).json({
            message: 'error al obtener las guitarras' , error: error.message});
    }
    }
)//localhost:3000/guitars
