const userModel = require('../models/userModel');

const getAllUsers = async (_req, res) => {
  const response = await userModel.getAllUsers();
  res.status(200).json(response);
};

const getUsersById = async (req, res) => {
  const { id } = req.params;
  const response = await userModel.getUsersById(id);
  res.status(200).json(response);
};

const createUser = async (req, res) => {
  const { userName, email, password } = req.body;
  const response = await userModel.createUser({ userName, email, password });
  const token = jwt.sign(response, secret);
  response.token = token;
  res.status(200).json({response});
};

const updateUser = async (req, res) => {
  const { id, userName, email, password } = req.body;
  const response = await userModel.updateUser({ id, userName, email, password });
  res.status(200).json(response);
};
  
const deleteUser = async (req, res) => {
  const { id } = req.body;
  const response = await userModel.deleteUser(id);
  res.status(200).json(response);
};

const validateFieldLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) return res.status(400).json({ message: 'All fields must be filled' });

  if (!validateEmail(email) && !validatePassword(password)) {
    return res.status(400).json({ message: 'incorrect' });
  }
  next();
};

module.exports = {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
  validateFieldLogin,
};
