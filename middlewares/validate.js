const { getUsers } = require('../utils/fsUsers');

const validateEmail = async (res, req, next) => {
    console.log('blalbalbalalalala', req);
    const { email } = req.body;
    const currentUsers = await getUsers();
    const invalidEmail = currentUsers.find((user) => user.email === email);
    if (invalidEmail) return res.status(400).json({ mensagem: "Email já cadastrado"});
    next();
};

module.exports = validateEmail;