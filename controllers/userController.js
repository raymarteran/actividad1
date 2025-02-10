const userModel = require('../models/userModel.js');
const bcrypt = require('bcrypt');

exports.getUsers = (req, res) => {
    res.json(userModel.getUsers());
};

exports.postUser = (req, res) => {
    let newUser = req.body;
    let allUsers = userModel.getUsers();
    newUser.id = allUsers.length + 1;

    //validar que todos los campos esten completos
    if (!newUser.name || !newUser.lastName || !newUser.userName || !newUser.email || !newUser.password || !newUser.repassword) {
        res.status(400).json({ error: 'Todos los campos son obligatorios' });
        return;
    }

    //agregar permission con un valor por defecto
    newUser.permission = 'user';

    //validar que el email sea unico
    const emailExists = allUsers.some(user => user.email === newUser.email);
    if (emailExists) {
        res.status(400).json({ error: 'El email ya existe' });
        return;
    }

    //validar que passwords sean iguales
    if (newUser.password !== newUser.repassword) {
        res.status(400).json({ error: 'Las contraseñas no coinciden' });
        return;
    }

    //hacer que el password sea encriptado en bycript
    let pass = bcrypt.hashSync(newUser.password, 10);
    newUser.password = pass;

    //quitar repassword para no guardar en la base de datos
    delete newUser.repassword;

    // Guarda al Usuario
    const savedUser = userModel.postUser(newUser);
    //allUsers = userModel.getUsers();
    //res.json(allUsers);
    res.json(savedUser);
};