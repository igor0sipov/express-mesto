const User = require('../models/users');

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((userList) => {
      res.send(userList);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.getSpecificUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user === null) {
        res.status(404).send({ message: 'Пользователь не найден' });
      }
      res.send(user);
    })
    .catch(() => {
      res.status(400).send({ message: 'id введен некорректно' });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.errors.name && err.errors.name.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      if (err.errors.about && err.errors.about.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      if (err.errors.avatar && err.errors.avatar.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.editUserInfo = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  )
    .then((me) => {
      if (me === null) {
        res.status(404).send({ message: 'Пользователь не найден' });
      }
      res.send(me);
    })
    .catch((err) => {
      if (err.errors.name && err.errors.name.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      if (err.errors.about && err.errors.about.name === 'ValidatorError') {
        res.status(400).send({ message: err.message });
      }
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports.editUserAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
      upsert: false,
    },
  )
    .then((me) => {
      if (me === null) {
        res.status(404).send({ message: 'Пользователь не найден' });
      }
      res.send(me);
    })
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};
