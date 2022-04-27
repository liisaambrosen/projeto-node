const express = require('express');
const router = express.Router();
const userController = require('./controller/userController');

router.post('/sign_up', userController.createUser);

router.post('/sign_in', userController.signIn);

router.get('/search', userController.searchUser);

module.exports = router;