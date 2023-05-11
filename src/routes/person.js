// Importamos el módulo 'express'
let express = require('express');

// Creamos una instancia de un objeto Router de Express
let router = express.Router();

// Definimos una ruta para manejar solicitudes GET a la ruta '/person'
router.get('/person', (req, res) => {
    res.send('haz solicitado un listado de personas');
});

// Exportamos el objeto Router creado
module.exports = router;