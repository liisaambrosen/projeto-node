const model = require('../model/userModel');
const { getUsers } = require('../utils/fsUsers');
const jwt = require('jsonwebtoken');

const secret = 'segredosecreto';
const jwtConfig = {
    expiresIn: '365d',
    algorithm: 'HS256'
};

const validateSearch = (token, user_id) => {
    //logica para verificar o token
};

const createUser = async (name, email, password, phoneNumbers) => {
    const token = jwt.sign({email, password}, secret, jwtConfig);
    const newUser = await model.createUser(name, email, password, phoneNumbers, token);
    return newUser;
};

const signIn = async (email, password) => {
    const user = await model.signIn(email, password);
    return user;
};

const searchUser = (token) => {
    // logica que chama o model.searchUser
};

module.exports = {
    createUser,
    signIn,
    searchUser,
};
