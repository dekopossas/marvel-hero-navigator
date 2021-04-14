const { Router } = require('express');
const userService = require('../services/userService');

const userRouter = new Router();

userRouter.get('/', userService.getAllUsers);

userRouter.get('/:id', userService.getUsersById);

userRouter.post('/', userService.createUser);

userRouter.put('/', userService.updateUser);

userRouter.delete('/', userService.updateUser);

module.exports = userRouter;
