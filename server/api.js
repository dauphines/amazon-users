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
  res.send('Aloha Universe!');
});

app.post('/prime/signup', (req, res) => {
  let user = inputs.test_user_005_signup; // req.body.user
  db.updateUserTrialSignup(user);
  res.send(user);
});

app.post('/prime/cancel', (req, res) => {
  let user = inputs.test_user_005_cancel; // req.body.user
  db.updateUserTrialCancel(user);
  res.send(user);
});


/* -------------------- SERVER -------------------- */


app.listen(7331, () => console.log('\x1b[34m----- SERVER : http://localhost:7331 -----\x1b[0m'));
