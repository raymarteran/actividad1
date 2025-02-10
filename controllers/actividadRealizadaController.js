const actRealizadaModel = require('../models/actRealizadaModel.js');
const categoriesModel = require('../models/categoriesModel.js');

exports.getActRealizadas = (req, res) => {
    //si esta vacio dar un mensaje que no hay 
    let allActR = actRealizadaModel.getActRealizadas();
    if (allActR.length === 0) {
        return res.status(400).send('No hay proyectos');
    } else {
        res.json(actRealizadaModel.getActRealizadas());    
    }
};

exports.postActividadRealizada = (req, res) => {
    let newAR = req.body;
    let allActR = actRealizadaModel.getActRealizadas();
    newAR.id = allActR.length + 1;

    let Exists = allActR.find(act => act.name === newAR.name);
    if (Exists) {
        return res.status(400).send('Ya existe una con ese nombre');
    }

    //antes de guardar validar que la idCategoria exista ya una categoria con ese id
    let allCategories = categoriesModel.getCategorias();
    let idCategoria = newAR.idCategoria
    //convertir categoria siempre en numero
    idCategoria = parseInt(idCategoria)
    let categoryExists = allCategories.find(category => category.id === idCategoria);
    if (!categoryExists) {
        return res.status(400).send('La categoría no existe debe crear una categoria primero');
    }

    //agregar status al crear en pendiente
    newAR.status = 'pending';
    
    actRealizadaModel.postActividadRealizada(newAR);
    res.json(newAR);
};