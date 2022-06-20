const service = require('../service/userService');
const Joi = require('joi');

const createUser = async (req, res) => {
    const { nome, email, senha, telefones } = req.body;
    try {
        const { error } = Joi.object({
            nome: Joi.string().not().empty().required(),
            email: Joi.string().not().empty().required(),
            senha: Joi.string().not().empty().required(),
            telefones: Joi.array().items(Joi.object().keys({
                numero: Joi.string().not().empty().required(),
                ddd: Joi.string().not().empty().required(),    
            })).required()
        }).validate({ nome, email, senha, telefones });

        if (error) {
            throw new Error("Dados inválidos");
        }

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

const searchUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await service.searchUser(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ "mensagem": err.message });
    }
};

module.exports = {
    createUser,
    signIn,
    searchUser,
}