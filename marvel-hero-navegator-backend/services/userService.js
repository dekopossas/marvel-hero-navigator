const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secret = 'MarvelHeroNavegatorSecret';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const getAllUsers = async (_req, res) => {
  const response = await userModel.getAllUsers();
  res.status(200).json(response);
};

const getUsersById = async (id) => userModel.getUsersById(id);

const createUser = async (req, res) => {
  const { userName, email, password } = req.body;
  const response = await userModel.createUser({ userName, email, password });
  const token = jwt.sign(response, secret);
  response.token = token;
  res.status(200).json({response});
};

const updateUser = async (data) => userModel.updateUser(data)
  
const deleteUser = async (id) => userModel.deleteUser(id);

module.exports = {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
