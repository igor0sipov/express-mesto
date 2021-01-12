const cardsRouter = require('express').Router();
const { getData } = require('../utils/get-data');

const filePath = 'data/cards.json';

cardsRouter.get('/cards', (req, res) => {
  getData(filePath)
    .then((cards) => res.send(cards))
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        code: '500',
        text: 'Internal Server Error',
        details: err,
      });
    });
});

module.exports = cardsRouter;
