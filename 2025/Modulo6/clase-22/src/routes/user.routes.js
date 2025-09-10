const express = require('express');
const auth = require('../middleware/authorization');
const { createUser, loginUser } = require('../controllers/user.controller'); 

const userRouter = express.Router();

// Crear usuario
// POST → http://localhost:3000/api/v1/users/create
userRouter.post('/create', createUser);

// Login usuario
// POST → http://localhost:3000/api/v1/users/login
userRouter.post('/login', loginUser);

// Verificar usuario con middleware (cuando lo implementes)
// GET → http://localhost:3000/api/v1/users/verify-user
// userRouter.get('/verify-user', auth);

module.exports = userRouter;
