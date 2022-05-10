const { getUsers, setUsers } = require('../utils/fsUsers');

const validateEmail = async (_res, req, next) => {
    // const users = await getUsers();
    // const newUsers = [...users, { req }];
    // setUsers(newUsers);
    const { email } = req.body;
    const currentUsers = await getUsers();
    const invalidEmail = currentUsers.find((user) => user.email === email);
    if (invalidEmail) return res.status(400).json({ mensagem: "Email já cadastrado"});
    next();
};

module.exports = validateEmail;