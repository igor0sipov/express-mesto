const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'users.json');
const handleReadFile = (req, res, id) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(409).send({
        message: err,
      });
    } else {
      const jsonData = JSON.parse(data);
      if (!id) {
        res.send(jsonData);
      } else {
        const requestedUser = jsonData.find((user) => user._id === id);
        if (!requestedUser) {
          res.status(404).send({
            message: 'Такого пользователя не существует',
          });
        } else {
          res.send(requestedUser);
        }
      }
    }
  });
};

module.exports.readUsers = (req, res, id) => {
  handleReadFile(req, res, id);
};
