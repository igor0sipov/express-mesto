const usersRouter = require('express').Router();
const {
  getAllUsers,
  getSpecificUser,
  createUser,
  editUserInfo,
  editUserAvatar,
} = require('../controllers/users');

usersRouter.get('/users', getAllUsers);

usersRouter.get('/users/:id', getSpecificUser);

usersRouter.post('/users', createUser);

usersRouter.patch('/users/me', editUserInfo);

usersRouter.patch('/users/me/avatar', editUserAvatar);

module.exports = usersRouter;
