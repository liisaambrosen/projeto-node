const model = require('../model/userModel');

const validateNewUser = (email) => {
    //logica pra verificar se o email existe no arquivo
};

const validateLogin = (email, password) => {
    //logica para verificar o usuario e senha passados
};

const validateSearch = (token, user_id) => {
    //logica para verificar o token
};

const createUser = async (name, email, password, phoneNumbers) => {
    await model.createUser(name, email, password, phoneNumbers);
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
