const Users = require('../database/dataBase.js').Users;

const userModel = {
    getUsers: () => Users,
    postUser: (user) => {
        Users.push(user);
        return user
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