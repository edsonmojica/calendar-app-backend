const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// Crear servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio Público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
// TODO: CRUD: Eventos

app.get('/', (req, res) => {
    res.json({
        ok: true,
    })
});


// Escuchar peticiones
app.listen(
    process.env.PORT, () => {
        console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
    });







