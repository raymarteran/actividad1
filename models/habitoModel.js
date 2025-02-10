const Habitos = require('../database/dataBase.js').Habitos;

const habitoModel = {
    getHabitos: () => Habitos,
    postHabito: (habito) => {
        Habitos.push(habito);
        return habito
    }
}   

module.exports = habitoModel


// para guardar una nueva categoria:
/*
{
    "name": "nombre del habito"
}
*/