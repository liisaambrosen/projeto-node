const { getUsers, setUsers } = require('../utils/fsUsers');

const createUser = async (name, email, password, phoneNumbers) => {
    const currentUsers = await getUsers();
    console.log(currentUsers);
    const newUser = {
        "name": name,
        "email": email,
        "password": password,
        "phoneNumbers": phoneNumbers
    };
    newUsers = [ ...currentUsers, newUser];
    setUsers(newUsers);
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
