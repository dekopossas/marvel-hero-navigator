const { ObjectId } = require('mongodb');
const connect = require('./connection');

const getAllUsers = async () => connect('users').then((db) => db.find().toArray());

const getUsersById = async (id) => connect('users').then((db) => db.find(ObjectId(id)));

const createUser = async () => connect('users')
  .then((db) => db.insertOne({userName, email, password}))
  .then((result) => ({ _id: result.insertedId, userName, email, password}));

const updateUser = async ({ id, userName, email, password }) => connect('users')
  .then((db) => db.updateOne({ _id: ObjectId(id) }, { $set: { userName, email, password } }));
  
const deleteUser = async (id) => connect('users')
  .then((db) => db.deleteOne({ _id: ObjectId(id) }));

module.exports = {
  getAllUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
