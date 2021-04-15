'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.json());

let data = {};


app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).send(data);
});

app.post('/data', (req, res) => {
  data = req.body;
  res.status(201).send('Added.');
})

app.listen(process.env.PORT, () => console.log(`Listening on Port ${process.env.PORT}`));