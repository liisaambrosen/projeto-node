const createUser = (name, email, password, phoneNumbers) => {
    console.log(name, email, password, phoneNumbers);
    // lógica de inserção do usuário no arquivo
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
