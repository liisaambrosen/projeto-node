const service = require('../service/userService');

const createUser = async (req, res) => {
    const { nome, email, senha, telefones } = req.body;
    try {
        const newUser = await service.createUser(nome, email, senha, telefones);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json({ "mensagem": err.message});
    }
};

const signIn = async (req, res) => {
    const { email, senha } = req.body;
    try {
        const logIn = await service.signIn(email, senha);
        res.status(200).json(logIn);
    } catch (err) {
        res.status(401).json({ "mensagem": err.message });
    }
};

const searchUser = (req, res) => {
    //codigo que chama o service.searchUser
};

module.exports = {
    createUser,
    signIn,
    searchUser,
}