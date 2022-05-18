const fs = require('fs').promises;
const path = require('path');

const USERS_PATH = path.join(__dirname, '..', '/', 'db_users.json');

const getUsers = async () => {
    const result = await fs.readFile(USERS_PATH, 'utf-8');
    return JSON.parse(result);
};

const setUsers = async (updatedUsers) => {
    await fs.writeFile(USERS_PATH, JSON.stringify(updatedUsers));
};

const createUser = async (name, email, password, phoneNumbers, token) => {
    const currentUsers = await getUsers();
    const newUser = {
        "id": currentUsers.length + 1,
        "token": token,
        "nome": name,
        "email": email,
        "senha": password,
        "telefone": phoneNumbers,
        "data_criacao": new Date(),
        "data_atualizacao": new Date(),
        "ultimo_login": new Date()
    };
    newUsers = [ ...currentUsers, newUser];
    await setUsers(newUsers);
    return newUser;
};

const signIn = async (email, senha) => {
    const currentUsers = await getUsers();
    const userLogin = currentUsers.find((user) => user.email === email && user.senha === senha);
    currentUsers[userLogin.id - 1].ultimo_login = new Date();
    setUsers(currentUsers);
    return userLogin;
};

const searchUser = async (id) => {
    const currentUsers = await getUsers();
    const userById = currentUsers.find((user) => user.id === JSON.parse(id));
    return userById;
};

module.exports = {
    getUsers,
    setUsers,
    createUser,
    signIn,
    searchUser,
};
