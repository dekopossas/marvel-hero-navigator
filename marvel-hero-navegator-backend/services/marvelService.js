const marvelModel = require('../models/mavelModel');

const getCharacters = async (req, res) => {
  const { offset } = req.params;
  const character = await marvelModel.getCharacters(offset);
  return res.status(200).json(character);
};

module.exports = {
  getCharacters,
};
