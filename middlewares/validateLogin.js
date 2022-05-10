const { getUsers } = require('../utils/fsUsers');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const message = "Usuário e/ou senha inválidos";
  const currentUsers = await getUsers();
  const emailExists = currentUsers.find((user) => user.email === email);
  if (!emailExists) return res.status(401).json({ "mensagem": message})
  if (emailExists.password !== password) return res.status(401).json({ "mensagem": message });
  next();
};

module.exports = validateLogin;