require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const Entry = require('./models/item');

app.use(cors());
app.use(bodyParser.json());

//const requestLogger = require('./middleware/requestLogger')
//app.use(requestLogger)
//app.use(unknownEndpoint)

app.get('/', (req, res) => {
  res.send('<h1>Hello wolrd </h1>');
});

app.get('/api/items', (req, res) => {
  Entry.find({}).then((entries) => {
    res.json(entries.map((entry) => entry.toJSON()));
  });
});

app.post('/api/item', (req, res, nxt) => {
  const body = req.body;
  console.log('body', body);
});

app.put('/api/item/:id', (req, res) => {});

app.get('/api/item/:id', (req, res) => {});

app.delete('/api/item/:id', (req, res) => {});

//app.use(errorHandler)
//app.use(unknowEndpoint)

const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server running on PORT ${PORT}`);
