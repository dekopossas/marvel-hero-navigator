const BAD_REQUEST = 400;

const validateEmail = (email) => {
  const pattern = /\S+@\S+.\S+/;
  return pattern.test(email);
}

const validateUser = async (req, res, next) => {
  const {name, email, password } = req.body;

  if (!name || !email || !password) {
    return response.status(BAD_REQUEST).json({ message: 'Invalid entries. Try again.'});
  }

  next();
};

module.exports = {
  validateEmail,
  validateUser
};
