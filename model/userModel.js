const { getUsers, setUsers } = require('../utils/fsUsers');

const createUser = async (name, email, password, phoneNumbers, token) => {
    const currentUsers = await getUsers();
    const newUser = {
        "id": currentUsers.length + 1,
        "token": token,
        "name": name,
        "email": email,
        "password": password,
        "phoneNumbers": phoneNumbers,
        "data_criacao": new Date(),
        "data_atualizacao": new Date(),
        "ultimo_login": new Date()
    };
    newUsers = [ ...currentUsers, newUser];
    setUsers(newUsers);
    return newUser;
};

const signIn = (email, password) => {
    console.log(email, password);
    // logica de login
};

const searchUser = (token) => {
    console.log(token);
    // lógica de busca do usuário no arquivo
};

module.exports = {
    createUser,
    signIn,
    searchUser,
};
