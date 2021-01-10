const usersRouter = require('express').Router();
const { readUsers } = require('../data/read-users');

usersRouter.get('/users', (req, res) => {
  readUsers(req, res, undefined);
});

usersRouter.get('/users/:id', (req, res) => {
  readUsers(req, res, req.params.id);
});

module.exports = usersRouter;
