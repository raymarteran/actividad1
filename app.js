const express = require('express');
const app = express();
// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Importar las rutas
const routesUsers = require('./routes/users.js');
const routesCategories = require('./routes/categories.js');
const routesactividad = require('./routes/actividad.js');
const habito = require('./routes/habito.js');
const proyecto = require('./routes/proyecto.js');
const actividadRealizada = require('./routes/actividadRealizada.js');


app.use('/users', routesUsers);
app.use('/categories', routesCategories);
app.use('/actividad', routesactividad);
app.use('/habito', habito);
app.use('/proyecto', proyecto);
app.use('/actividadRealizada', actividadRealizada);



app.get('/', (req, res) => {
    res.send('Entra en la ruta: /');
});

app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});