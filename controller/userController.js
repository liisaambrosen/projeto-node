const service = require('../service/userService');

const createUser = async (req, res) => {

    try {
        const { name, email, password, phoneNumbers } = req.body;
        await service.createUser(name, email, password, phoneNumbers);
        res.status(200).send(`${name}, ${email} criado com sucesso`);
    } catch (err) {
        res.status(400).send({ "mensagem": err.message});
    }
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