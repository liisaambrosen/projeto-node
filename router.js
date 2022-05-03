const express = require('express');
const router = express.Router();
const userController = require('./controller/userController');
const validateEmail = require('./middlewares/validate');

router.post('/sign_up', validateEmail, userController.createUser);

router.post('/sign_in', userController.signIn);

router.get('/search', userController.searchUser);

router.all('*', (_req, res) => {
    res.status(404).json({ mensagem: "Endpoint não encontrado"});
});

module.exports = router;