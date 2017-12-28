const db = require('../database/psql.js');
const inputs = require('./inputs.js');
const express = require('express');
const bodyParser = require('body-parser'); // extracts entire body of incoming req stream & exposes via req.body
const axios = require('axios');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/* -------------------- ROUTES -------------------- */


app.get('/', (req, res) => {
  res.send('Aloha universe!');
});

app.post('/register', (req, res) => {
  db.registerAccount(req.body);
  res.send('Account registered!');
});

app.put('/prime/signup', (req, res) => {
  db.updateTrialSignup(req.body);
  res.send('User signed up!');
});

app.put('/prime/cancel', (req, res) => {
  db.updateTrialCancel(req.body);
  res.send('User cancelled!');
});


/* -------------------- SERVER -------------------- */


app.listen(7331, () => console.log('\x1b[32m----- SERVER : http://localhost:7331 -----\x1b[0m'));
