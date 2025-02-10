const express = require('express');
const router = express.Router();
const Controller = require('../controllers/proyectoController.js');

router.get('/', Controller.getProyectos);
router.post('/', Controller.postProyecto);

module.exports = router;