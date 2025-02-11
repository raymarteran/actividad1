const ActRealizada = require('../database/dataBase.js').ActRealizada;

const actRealizadaModel = {
    getActRealizadas: () => ActRealizada,
    postActividadRealizada: (newAR) => {
        ActRealizada.push(newAR);
        return newAR
    },
    getActividadesRealizadasPorFechas: (startDate, endDate) => {
        const actividades = ActRealizada.filter(act => new Date(act.dateInicio) > new Date(startDate) && new Date(act.dateFinal) < new Date(endDate));
        return actividades
    },
    getActividadesRealizadasPorNombreActividad: (name) => {
        const actividadesRealizadas = ActRealizada.filter(act => act.name === name)
        return actividadesRealizadas
    },
    getActividadesAbiertas: () => {
        const actividadesAbiertas = ActRealizada.filter(act => act.dateFinal === null);
        return actividadesAbiertas
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