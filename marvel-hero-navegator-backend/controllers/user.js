const jwt = require('jsonwebtoken');
const userService = require('../services/userServece');

const secret = 'MarvelHeroNavegatorSecret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const CONFLICT = 409;
const CREATED = 201;
const INTERNAL_ERROR = 500;

const register = async (req, res) => {
  try{
    const {name, email, password} = req.body;
    
    const token = jwt.sign({ data: [email, password] }, secret, jwtConfig);
    const user = await userService.findByUserEmail(email);
    if(user) return res.status(CONFLICT).json({ message: 'Email already in use.'});
    
    await userService.createUser(name, email, password);
    
    const findNewUser = await userService.findByUserEmail(email);
    const userObj = { ...findNewUser, token };
    
    return res.status(CREATED).json({ user: userObj });
  } catch (err) {
    return res.status(INTERNAL_ERROR).json({ message: `quando eu resovler${err}` });
  }
};

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const usersList = await userService.getAllUsers();

//     const userExist = await usersList.find((user) => user.email === email);
//   }
// }

module.exports = {
  register,
};
