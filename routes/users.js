const usersRouter = require('express').Router();
const { getData } = require('../utils/get-data');

const filePath = 'data/users.json';

usersRouter.get('/users', (req, res) => {
  getData(filePath)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        code: '500',
        text: 'Internal Server Error',
        details: err,
      });
    });
});

usersRouter.get('/users/:id', (req, res) => {
  getData(filePath)
    .then((users) => {
      const requestedUser = users.find((user) => user._id === req.params.id);
      if (requestedUser) {
        res.send(requestedUser);
      } else {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        code: '500',
        text: 'Internal Server Error',
        details: err,
      });
    });
});

module.exports = usersRouter;
