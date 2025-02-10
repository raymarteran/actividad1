const Actividades = require('../database/dataBase.js').Actividades;

const actividadModel = {
    getActividades: () => Actividades,
    postActividad: (actividad) => {
        Actividades.push(actividad);
        return actividad
    }
}   

module.exports = actividadModel


// para guardar una nueva categoria:
/*
{
    "name": "nombre de la actividad"
}
*/