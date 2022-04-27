const service = require('../service/userService');

const createUser = (req, res) => {
    const { name, email } = req.body;
    //codigo que chama o service.createUser
    res.status(200).send(`${name}, ${email}`);
};

const signIn = (req, res) => {
    // codigo que chama o service.signIn
};

const searchUser = (req, res) => {
    //codigo que chama o service.searchUser
};

module.exports = {
    createUser,
    signIn,
    searchUser,
}