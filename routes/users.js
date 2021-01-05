const usersRouter = require('express').Router();
const { users } = require('../data/users.json');

usersRouter.get('/users/:id', (req, res) => {
  const requestedUser = users.filter((user) => user._id === req.params.id);
  if (!requestedUser) {
    res.status(404);
    res.send({
      message: 'Такого пользователя не существует',
    });
  } else {
    res.send(requestedUser);
  }
});

module.exports = usersRouter;
