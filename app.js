const express = require('express');
const app = express();


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