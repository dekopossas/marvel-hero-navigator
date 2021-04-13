const userModel = require('../models/userModel');

const getAllUsers = async () => userModel.getAllUsers();

const getUsersById = async (id) => userModel.getUsersById(id);

const createUser = async (data) => userModel.createUser(data);

const updateUser = async (data) => userModel.updateUser(data)
  
const deleteUser = async (id) => userModel.deleteUser(id);

module.exports = {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
