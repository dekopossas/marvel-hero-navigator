const userModel = require('../models/userModel');
const authJWT = require('../auth/validateToken');

const UNAUTHORIZED = 401
const CONFLICT = 409;
const CREATED = 201;
const INTERNAL_ERROR = 500;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.getUsersByEmail(email);

    if (!user || user.password !== password) {
      return res.status(UNAUTHORIZED).json({ message: 'Usuário não existe ou senha inválida' });
    }

    const token = authJWT.jwtSign({ data: user }, authJWT.secret, authJWT.jwtConfig);

    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const register = async (req, res) => {
  try{
    const {name, email, password} = req.body;
    
    const token = authJWT.jwtSign({ data: [email, password] }, authJWT.secret, authJWT.jwtConfig);

    const user = await userModel.getUsersByEmail(email);
    if (user && user.email === email) {
      return res.status(CONFLICT).json({ message: 'Email already in use.' });
    };

    await userModel.createUser(name, email, password);
    
    const findNewUser = await userModel.getUsersByEmail(email);
    const userObj = { ...findNewUser, token };
    
    return res.status(CREATED).json({ user: userObj });
  } catch (err) {
    return res.status(INTERNAL_ERROR).json({ message: err });
  }
};

module.exports = {
  register,
  login,
};
