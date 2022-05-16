const model = require('../model/userModel');

const validateUser = async (req, res, next) => {
  const { email } = req.body;
  const currentUsers = await model.getUsers();
  const invalidEmail = currentUsers.find((user) => user.email === email);
  if (invalidEmail) return res.status(400).json({ "mensagem": "Email já cadastrado"});
  next();
}

module.exports = validateUser;