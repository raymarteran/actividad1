const ActRealizada = require('../database/dataBase.js').ActRealizada;

const actRealizadaModel = {
    getActRealizadas: () => ActRealizada,
    postActividadRealizada: (newAR) => {
        ActRealizada.push(newAR);
        return newAR
    }
}   

module.exports = actRealizadaModel


// para guardar un nueva actividad realizada:
/*
{
    "name": "nombredel proyecto",
    "description": "descripcion de la actividad realizada",
    "idCategoria": 1,
    "fechaInicio": "01-01-2023",
    "fechaFin": "01-01-2023"
}
*/