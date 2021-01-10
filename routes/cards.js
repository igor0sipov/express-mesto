const cardsRouter = require('express').Router();
const { readCards } = require('../data/read-cards');

cardsRouter.get('/cards', (req, res) => {
  readCards(req, res);
});

module.exports = cardsRouter;
