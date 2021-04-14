const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const secret = 'MarvelHeroNavegatorSecret';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token não encontrado!' });

  try {
    const decoded = jwt.verify(token, secret);
    const user = await userModel.getUsersById(decoded.data.email);

    if (!user) return res.status(401).json({ message: 'erro ao procurar usuário token' });

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'erro ao procurar usuário token' });
  }
};
