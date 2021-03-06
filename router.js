const express = require('express');
const router = express.Router();
const userController = require('./controller/userController');

const validateEmail = require('./middlewares/validateNewUser');
const validateLogin = require('./middlewares/validateLogin');
const validateJWT = require('./auth/validateJWT');

router.post('/sign_up', validateEmail, userController.createUser);

router.post('/sign_in', validateLogin, userController.signIn);

router.get('/search/:id', validateJWT, userController.searchUser);

router.all('*', (_req, res) => {
    res.status(404).json({ mensagem: "Endpoint não encontrado"});
});

module.exports = router;