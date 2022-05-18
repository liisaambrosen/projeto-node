const model = require('../model/userModel');
const jwt = require('jsonwebtoken');
const moment = require('moment');

const secret = 'segredosecreto';
const jwtConfig = {
    expiresIn: '365d',
    algorithm: 'HS256'
};

const createUser = async (name, email, password, phoneNumbers) => {
    const token = jwt.sign({email, password}, secret, jwtConfig);
    const newUser = await model.createUser(name, email, password, phoneNumbers, token);
    return newUser;
};

const signIn = async (email, senha) => {
    const user = await model.signIn(email, senha);
    return user;
};

const searchUser = async (id) => {
    const user = await model.searchUser(id);
    const currentMinusThirty = moment().subtract(30, 'minutes').toDate().getTime();
    const lastLogin = new Date(user.ultimo_login);
    const parseLogin = moment(lastLogin);
    if (parseLogin < currentMinusThirty) throw new Error('Sessão inválida');
    return user;
};

module.exports = {
    createUser,
    signIn,
    searchUser,
};
