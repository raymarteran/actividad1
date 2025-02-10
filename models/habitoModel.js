const Habitos = require('../database/dataBase.js').Habitos;
const Actividades = require('../database/dataBase.js').Actividades;

const habitoModel = {
    getHabitos: () => {
        return Habitos.map(hab => {
            const actividades = Actividades ? Actividades.find(act => act.id === hab.idActividad) : [];
            return {
                ...hab,
                actividades: actividades ? actividades : []
            };
        });
    },
    postHabito: (habito) => {
        Habitos.push(habito);
        return habito
    }
}   

module.exports = habitoModel


// para guardar una nueva categoria:
/*
{
    "name": "nombre del habito",
    "idActividad": 1
}
*/