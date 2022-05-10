const model = require('../model/userModel');
const jwt = require('jsonwebtoken');

const secret = 'segredosecreto';
const jwtConfig = {
    expiresIn: '365d',
    algorithm: 'HS256'
};

const validateNewUser = (email) => {
    const currentUsers = await getUsers();
    const invalidEmail = currentUsers.find((user) => user.email === email);
    if (invalidEmail) return 'Email já cadastrado';
}

const validateLogin = (email, password) => {
    //logica para verificar o usuario e senha passados
};

const validateSearch = (token, user_id) => {
    //logica para verificar o token
};

const createUser = async (name, email, password, phoneNumbers) => {
    const token = jwt.sign({email, password}, secret, jwtConfig);
    const newUser = await model.createUser(name, email, password, phoneNumbers, token);
    return newUser;
};

const signIn = (email, password) => {
    // logica que chama o model.signIn
}

const searchUser = (token) => {
    // logica que chama o model.searchUser
}

module.exports = {
    createUser,
    signIn,
    searchUser,
};
