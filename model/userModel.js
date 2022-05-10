const { getUsers, setUsers } = require('../utils/fsUsers');

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
    setUsers(newUsers);
    return newUser;
};

const signIn = async (email, senha) => {
    const currentUsers = await getUsers();
    const userLogin = currentUsers.find((user) => user.email === email && user.senha === senha);
    return userLogin;
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
