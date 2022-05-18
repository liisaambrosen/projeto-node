const model = require('../model/userModel');

const validate = async (req, res, next) => {
    const token = req.headers['authentication'];
    const { id } = req.params;

    if (!token) {
        return res.status(401).json({ mensagem: 'Não autorizado' });
    }

    const allUsers = await model.getUsers();
    const user = allUsers.find((user) => user.id === JSON.parse(id));
    const editToken = token.split(" ");
    
    if (user.token !== editToken[1]) {
        return res.status(401).json({ mensagem: 'Não autorizado' });    
    }

    next();
};

module.exports = validate;
