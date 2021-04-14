const { Router } = require('express');
const user = require('./user');
const userService = require('../services/userService');

const userRouter = new Router();

userRouter.post('/login',userService.validateFieldLogin , user.login);

userRouter.post('/register',userService.validateFieldLogin,
  userService.validateFieldName, user.register);

module.exports = userRouter;
