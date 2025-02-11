const express = require('express');
const router = express.Router();
const Controller = require('../controllers/actividadRealizadaController.js');

router.get('/', Controller.getActRealizadas);
router.post('/', Controller.postActividadRealizada);
//actividades realizadas por rango de fechas
router.get('/actividades-realizadas-por-fechas', Controller.getActividadesRealizadasPorFechas);
//buscar actividadres realizadas por nombre de la actividad
router.get('/actividadesrealizadas-name', Controller.getActividadesRealizadasPorNombreActividad);


module.exports = router;