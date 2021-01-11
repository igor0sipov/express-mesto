const fs = require('fs').promises;
const path = require('path');

module.exports.getData = (filePath) => {
  const absolutePath = path.resolve(filePath);

  return fs
    .readFile(absolutePath, { encoding: 'utf8' })
    .then((data) => JSON.parse(data));
};
