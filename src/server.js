// Importamos el módulo 'express'
let express = require('express');

// Creamos una instancia de la aplicación Express
let app = express();

// Importamos el módulo definido en './routes/person'
let personsRoute = require('./routes/person');

// Establecemos el motor de vistas de la aplicación como 'ejs'
app.set('view engine', 'ejs');

// Usamos la ruta definida en './routes/person'
app.use(personsRoute);

// Establecemos una ruta estática para servir archivos estáticos
app.use('/assets', express.static(__dirname + '/public'));

// Establecemos el puerto en el que escuchará el servidor
let PORT = process.env.PORT || 3000;

// Iniciamos el servidor y lo configuramos para escuchar en el puerto definido
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});