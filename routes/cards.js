const cardsRouter = require('express').Router();
const { getData } = require('../utils/get-data');

const filePath = 'data/cards.json';

const handleError = (err, res) => {
  res.status(404).send({
    message: err,
  });
};

cardsRouter.get('/cards', (req, res) => {
  getData(filePath)
    .then((cards) => res.send(cards))
    .catch((err) => handleError(err, res));
});

module.exports = cardsRouter;
