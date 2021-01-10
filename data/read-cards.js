const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'cards.json');

const handleReadFile = (req, res) => {
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(409).send({
        message: err,
      });
    } else {
      res.send(JSON.parse(data));
    }
  });
};

module.exports.readCards = (req, res) => {
  handleReadFile(req, res);
};
