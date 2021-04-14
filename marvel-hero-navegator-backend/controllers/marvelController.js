const { Router } = require('express');
const marvelService = require('../services/marvelService');

const marvelRouter = new Router();

marvelRouter.get('/all/:offset', marvelService.getCharacters)

module.exports = marvelRouter;
