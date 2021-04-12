const { Router } = require('express');
const user = require('./user');
const userService = require('../services/userService');

const router = new Router();

router.post(
  '/register',
  userService.validateFieldLogin,
  userService.validateFieldName,
  user.register
);

module.exports = router;
