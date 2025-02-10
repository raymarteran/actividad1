const express = require('express');
const router = express.Router();
const Controller = require('../controllers/actividadRealizadaController.js');

router.get('/', Controller.getActRealizadas);
router.post('/', Controller.postActividadRealizada);

module.exports = router;