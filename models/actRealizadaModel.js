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
    "name: "Actividad 3",
    "description: "Actividad 3descripcion",
    "idActividad": 3,
    "dateInicio": "2025-02-08",
    "dateFinal": "2025-02-08",
}
*/