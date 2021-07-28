const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cards = require('./routes/cards.js');
const users = require('./routes/users.js');

const { PORT = 5000 } = process.env;

const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: '6011a828598fe933586ace6c',
  };

  next();
});

app.use('/', cards);
app.use('/', users);

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
