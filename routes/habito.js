const express = require('express');
const router = express.Router();
const Controller = require('../controllers/habitoController.js');

router.get('/', Controller.getHabitos);
router.post('/', Controller.postHabito);

module.exports = router;