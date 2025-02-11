const express = require('express');
const router = express.Router();
const Controller = require('../controllers/actividadRealizadaController.js');

router.get('/', Controller.getActRealizadas);
router.post('/', Controller.postActividadRealizada);
//actividades realizadas por rango de fechas
router.get('/actividades-realizadas-por-fechas', Controller.getActividadesRealizadasPorFechas);

module.exports = router;