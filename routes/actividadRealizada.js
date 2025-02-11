const express = require('express');
const router = express.Router();
const Controller = require('../controllers/actividadRealizadaController.js');

router.get('/', Controller.getActRealizadas);
router.post('/', Controller.postActividadRealizada);
//actividades realizadas por rango de fechas
router.get('/actividades-realizadas-por-fechas', Controller.getActividadesRealizadasPorFechas);
//buscar actividadres realizadas por nombre de la actividad
router.get('/actividadesrealizadas-name', Controller.getActividadesRealizadasPorNombreActividad);
//mostrar actividades abiertas sin fecha de finailizacion
router.get('/actividades-activas', Controller.getActividadesAbiertas);
//Eliminar actividad realizada y sus relaciones.
router.delete('/:id', Controller.deleteActividadRealizada);



module.exports = router;