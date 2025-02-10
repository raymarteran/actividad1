const Users = require('../database/dataBase.js').Users;
const Proyectos = require('../database/dataBase.js').Proyectos;
const Habitos = require('../database/dataBase.js').Habitos;
const Categorias = require('../database/dataBase.js').Categorias;
const Actividades = require('../database/dataBase.js').Actividades;

const userModel = {
    getUsers: () => {
        return Users.map(user => {
            const proyectos = Proyectos ? Proyectos.filter(pro => pro.idUser === user.id) : [];
            const habitos = Habitos ? Habitos.filter(hab => hab.idUser === user.id) : [];
            return {
                ...user,
                proyectos: proyectos ? proyectos : [],
                habitos: habitos ? habitos : []
            };
        });
    },
    postUser: (user) => {
        Users.push(user);
        return user
    },
    getActividadesCategoriaUsuario: (idUser, categoria) => {
        //Mostrar las actividades de una categoría determinada de un usuario dado.
        const AllActividades = Actividades.map(act => {
            const categoria = Categorias ? Categorias.filter(cate => cate.id === act.idCategoria) : [];
            return {
                ...act,
                categoria: categoria ? categoria : []
            };
        });

        //filtrar por categoria name 
        const ActividadesCategoria = AllActividades.filter(act => act.categoria[0].name === categoria);


        //filtrar por idUser
        const ActividadesCategoriaUsuario = ActividadesCategoria.filter(act => {
            return act.idUser === idUser;
        });


        return ActividadesCategoriaUsuario
    }
}   

module.exports = userModel


// para guardar un usuario nuevo ejemplo:
/*
{
    "name": "Raymar",
    "lastName": "Teran",
    "userName": "raymarteran",
    "email": "2.raymar1@gmail.com",
    "password": "1234",
    "repassword": "1234"
}
    
*/