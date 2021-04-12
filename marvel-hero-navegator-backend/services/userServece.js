const userModel = require('../models/user');

const BAD_REQUEST = 400;

const validateEmail = (email) => {
  const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return pattern.test(email);
};

const validatePassword = (password) => {
  const MIN_PASSWORD_LENGTH = 6;
  const passwordVerified = password >= MIN_PASSWORD_LENGTH;
  return passwordVerified;
};

const validateName = (name) => {
  const regexName = /^[A-Za-z'\s]+$/;
  const MIN_NAME_LENGTH = 3;
  const nameLength = name.length >= MIN_NAME_LENGTH;
  const nameVerified = regexName.test(name);
  return nameVerified && nameLength;
}

const validateFieldName = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(BAD_REQUEST).json({ message: 'Invalid entries. Try again.'});

  if(!validateName(name)) return res.status(BAD_REQUEST).json({ message: 'Invalid name.' });

  next();
}

const validateFieldLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(BAD_REQUEST).json({ message: 'Invalid entries. Try again.'});
  }
  if (!validateEmail(email) && !validatePassword(password)) {
    return res.status(BAD_REQUEST).json({ message: 'incorrect'});
  }

  next();
};

const getAllUsers = () => userModel.getAllUsers();

const findByEmail = (email) => {
  usersList = getAllUsers();
  const emailFound = usersList.find((user) => user.email === email);
  return emailFound;
};

const createUser = async (name, email, password) => {
  await userModel.createUser(name, email, password);
  const user = { name, email, password };
  return user;
}

module.exports = {
  validateUser,
  validateFieldName,
  validateFieldLogin,
  getAllUsers,
  findByEmail,
  createUser,
};
