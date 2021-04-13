const { Router } = require('express');
const userService = require('../services/userService');

const userRouter = new Router();

userRouter.get('/', async (_req, res) => {
  const response = await userService.getAllUsers();
  res.status(200).json(response);
});

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await userService.getUsersById(id);
  res.status(200).json(response);
});

userRouter.post('/', async (req, res) => {
  const { userName, email, password } = req.body;
  const response = await userService.createUser({ userName, email, password });
  res.status(200).json(response);
});

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
