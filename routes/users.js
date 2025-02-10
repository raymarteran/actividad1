const express = require('express');
const router = express.Router();
const Controller = require('../controllers/userController.js');

router.get('/', Controller.getUsers);
router.get('/actividades-categoria-usuario/:id/:categoria', Controller.getActividadesCategoriaUsuario);
router.post('/', Controller.postUser);

module.exports = router;