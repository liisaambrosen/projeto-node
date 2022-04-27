const createUser = (name, email, password, phoneNumbers) => {
    console.log(name, email, password, phoneNumbers);
};

const signIn = (email, password) => {
    console.log(email, password);
};

const searchUser = (token) => {
    console.log(token);
};

module.exports = {
    createUser,
    signIn,
    searchUser,
}