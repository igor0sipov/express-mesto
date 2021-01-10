const express = require('express');
const path = require('path');
const cards = require('./routes/cards.js');
const users = require('./routes/users.js');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', cards);
app.use('/', users);
app.use('/:resource', (req, res) => {
  if (req.params.resource !== 'cards' || req.params.resource !== 'users') {
    res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
