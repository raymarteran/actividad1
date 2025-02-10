const proyectoModel = require('../models/proyectoModel.js');

exports.getProyectos = (req, res) => {
    //si esta vacio dar un mensaje que no hay 
    let allProyectos = proyectoModel.getProyectos();
    if (allProyectos.length === 0) {
        return res.status(400).send('No hay proyectos');
    } else {
        res.json(proyectoModel.getProyectos());    
    }
};

exports.postProyecto = (req, res) => {
    let newProyecto = req.body;
    let allProyectos = proyectoModel.getProyectos();
    newProyecto.id = allProyectos.length + 1;

    let Exists = allProyectos.find(proy => proy.name === newProyecto.name);
    if (Exists) {
        return res.status(400).send('Ya existe una categoría con ese nombre');
    }

    
    proyectoModel.postProyecto(newProyecto);
    res.json(newProyecto);
};