let users = [
    {
        id: 1,
        name: 'Raymar',
        lastName: 'Teran',
        userName: 'raymarteran',
        email: 'teran.raymar1@gmail.com',
        password : '1234',
        repassword: '1234',
        permission: 'admin'
      }
];

let categories = [
    {
        id: 1,
        name: 'categoria1'
    },
    {
        id: 2,
        name: 'categoria2'
    },
    {
        id: 3,
        name: 'categoria3'
    }
];



let habitos = [
    {
        id: 1,
        name: 'Hábito 1',
        idActividad: 1,
        idUser: 1
    },
    {
        id: 2,
        name: 'Hábito 2',
        idActividad: 2,
        idUser: 2
    },
    {
        id: 3,
        name: 'Hábito 3',
        idActividad: 3,
        idUser: 3
    }
]

let Proyectos = [
    {
        id: 1,
        name: 'Proyecto 1',
        idActividad: 1,
        idUser: 1
    },
    {
        id: 2,
        name: 'Proyecto 2',
        idActividad: 2,
        idUser: 2
    },
    {
        id: 3,
        name: 'Proyecto 3',
        idActividad: 3,
        idUser: 3
    }
]
let actividades = [
    {
        id: 1,
        name: 'Actividad 1',
        idCategoria: 2,
        idUser: 1
    },
    {
        id: 2,
        name: 'Actividad 2',
        idCategoria: 1,
        idUser: 1
    },
    {
        id: 3,
        name: 'Actividad 3',
        idCategoria: 3,
        idUser: 3
    }
];
let ActRealizada = [
    {
        id: 1,
        name: 'Actividad 1',
        description: 'Actividad 1descripcion',
        idActividad: 1,
        dateInicio: '2025-02-10',
        dateFinal: '2025-02-10',
        status: 'completed'
    },
    {
        id: 2,
        name: 'Actividad 2',
        description: 'Actividad 2descripcion',
        idActividad: 2,
        dateInicio: '2025-02-09',
        dateFinal: '2025-02-09',
        status: 'pending'
    },
    {
        id: 3,
        name: 'Actividad 3',
        description: 'Actividad 3descripcion',
        idActividad: 3,
        dateInicio: '2025-02-08',
        dateFinal: '2025-02-08',
        status: 'completed'
    }
]

exports.Users = users;
exports.Categorias = categories;
exports.Actividades = actividades;
exports.Habitos = habitos;
exports.Proyectos = Proyectos;
exports.ActRealizada = ActRealizada;
