const model = require('../model/userModel');

const validateLogin = async (req, res, next) => {
  const { email, senha } = req.body;
  const message = "Usuário e/ou senha inválidos";
  const currentUsers = await model.getUsers();
  const emailExists = currentUsers.find((user) => user.email === email);
  if (!emailExists) return res.status(401).json({ "mensagem": message})
  if (emailExists.senha !== senha) return res.status(401).json({ "mensagem": message });
  next();
};

module.exports = validateLogin;