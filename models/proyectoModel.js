const Proyecto = require('../database/dataBase.js').Proyecto;

const proyectoModel = {
    getProyectos: () => Proyecto,
    postProyecto: (newpro) => {
        Proyecto.push(newpro);
        return newpro
    }
}   

module.exports = proyectoModel


// para guardar un nuevo proyecto:
/*
{
    "name": "nombredel proyecto"
}
*/