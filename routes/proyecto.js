const express = require('express');
const router = express.Router();
const Controller = require('../controllers/proyectoController.js');

router.get('/', Controller.getProyectos);
router.get('/actividades-realizadas/:id', Controller.getActividadesRealizadas);
router.post('/', Controller.postProyecto);

module.exports = router;