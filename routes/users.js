const express = require('express');
const router = express.Router();
const Controller = require('../controllers/userController.js');

router.get('/', Controller.getUsers);
router.post('/', Controller.postUser);

module.exports = router;