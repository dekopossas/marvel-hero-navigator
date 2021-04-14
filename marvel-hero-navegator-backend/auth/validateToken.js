const jwt = require('jsonwebtoken');
const secret = 'MarvelHeroNavegatorSecret';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtSign = (payload, jwtSecret, jwtConfig) => (
  jwt.sign(payload, jwtSecret, jwtConfig)
);

const createJwt = (user) => ({
  iss: 'MarvelApp',
  aud: 'indentity',
  userData: user,
});

module.exports = {
  secret,
  jwtConfig,
  jwtSign,
  createJwt,
};
