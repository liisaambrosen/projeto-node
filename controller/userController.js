const service = require('../service/userService');

const createUser = async (req, res) => {
    const { name, email, password, phoneNumbers } = req.body;
    try {
        const newUser = await service.createUser(name, email, password, phoneNumbers);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json({ "mensagem": err.message});
    }
};

const signIn = async (req, res) => {
    // codigo que chama o service.signIn
    const { email, password } = req.body;
    try {
        const logIn = await service.signIn(email, password);
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