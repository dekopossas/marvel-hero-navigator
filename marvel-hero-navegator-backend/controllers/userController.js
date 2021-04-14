const { Router } = require('express');
const user = require('./user');
const userService = require('../services/userService');

const userRouter = new Router();

userRouter.post('/register', userService.createUser);

userRouter.post('/login', userService.createUser);

module.exports = userRouter;
