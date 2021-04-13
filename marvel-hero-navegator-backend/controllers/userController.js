const { Router } = require('express');
const user = require('./user');
const userService = require('../services/userService');

const userRouter = new Router();

userRouter.get('/', async (_req, res) => {
  const response = await userService.getAllUsers();
  res.status(200).json(response);
});

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  const response = await userService.getUsersById(id);
  res.status(200).json(response);
});

userRouter.post('/', async (req, res) => {
  const response = await userService.createUser(req.body);
  res.status(200).json(response);
});

userRouter.get('/', async (req, res) => {
  const response = await userService.updateUser(req.body);
  res.status(200).json(response);
});

userRouter.get('/', async (req, res) => {
  const { id } = req.body;
  const response = await userService.deleteUser(id);
  res.status(200).json(response);
});

module.exports = userRouter;
