const cardsRouter = require('express').Router();
const { getData } = require('../utils/get-data');

const filePath = 'data/cards.json';

cardsRouter.get('/cards', (req, res) => {
  getData(filePath)
    .then((cards) => res.send(cards))
    .catch((err) => {
      res.status(500).send({
        message: '500: Internal Server Error',
      });
    });
});
// Что вы подразумеваете под "сообщением об ошибке" в данном случае?
// Просто строку со статусом ошибки и описанием? или объект err который передается в catch?
// Что-то другое?
// Если я не угадал то, что вы подразумеваете, я надеюсь, что это не будет ошибкой
// Я способен в значение поля "message" подставить что-то другое.

module.exports = cardsRouter;
