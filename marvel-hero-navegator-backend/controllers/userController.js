const { Router } = require('express');
const userService = require('../services/userService');

const userRouter = new Router();

userRouter.get('/', userService.getAllUsers);

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await userService.getUsersById(id);
  res.status(200).json(response);
});

userRouter.post('/', userService.createUser);

userRouter.put('/', async (req, res) => {
  const { id, userName, email, password } = req.body;
  const response = await userService.updateUser({ id, userName, email, password });
  res.status(200).json(response);
});

userRouter.delete('/', async (req, res) => {
  const { id } = req.body;
  const response = await userService.deleteUser(id);
  res.status(200).json(response);
});

module.exports = userRouter;
