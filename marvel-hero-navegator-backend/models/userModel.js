const connection = require('./connection');

const createUser = async (name, email, password) => connection()
  .then((db) => db.collection('users').insertOne(name, email, password));

const getAllUsers = async () => connection()
  .then((db) => db.collection('users').find().toArray());

module.exports = {
  createUser,
  getAllUsers,
};
