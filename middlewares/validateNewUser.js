const model = require('../model/userModel');

const validateUser = async (req, res, next) => {
  const { email } = req.body;
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(email)) {
    return res.status(400).json({ "mensagem": "Email inválido" });
  }
  const currentUsers = await model.getUsers();
  const invalidEmail = currentUsers.find((user) => user.email === email);
  if (invalidEmail) return res.status(400).json({ "mensagem": "Email já cadastrado" });
  next();
}

module.exports = validateUser;