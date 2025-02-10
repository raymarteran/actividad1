const Proyectos = require('../database/dataBase.js').Proyectos;
const Actividades = require('../database/dataBase.js').Actividades;
const actividadRealizada = require('../database/dataBase.js').ActRealizada;

const proyectoModel = {
    getProyectos: () => {
        return Proyecto.map(proyecto => {
            const actividades = Actividades.find(act => act.id === proyecto.idActividad);
            const actividadesRealizadas = actividadRealizada.filter(actR => actR.idActividad === actividades.id);

            return {
                ...proyecto,
                actividades: actividades ? { 
                    id: actividades.id, 
                    name: actividades.name,
                    actividadesRealizadas: actividadesRealizadas.map(actR => (actR))
                } : [],
            };
        });
    },
    postProyecto: (newpro) => {
        Proyecto.push(newpro);
        return newpro
    },
    getActividadesRealizadas: (idProyecto) => {
        const allProyectos = Proyectos.find(proy => proy.id === idProyecto);
        if (!allProyectos) {
            return [];
        }
        // de todos los proyectos traer las actividades y de las actividades las actividades realizadas
        const actividades = Actividades.find(act => act.id === allProyectos.idActividad);
        const actividadesRealizadas = actividadRealizada.filter(actR => actR.idActividad === actividades.id);

        return actividadesRealizadas

    }
}   

module.exports = proyectoModel


// para guardar un nuevo proyecto:
/*
{
    "name": "nombredel proyecto",
    "idActividad": 1,
    "idActividadRealizada": 1
}
*/