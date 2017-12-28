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

app.post('/register', (req, res) => {
  let user = {
    first_name: 'Boo',
    last_name: 'Face',
    email: 'test@test.com',
    contact_number: 19098765432
  };

  db.registerAccount(user);
  // writes to database with hardcoded user object
  // req.body is empty object in postman, should be params object

  res.send('User registered account!');
});

app.put('/prime/signup', (req, res) => {
  let user = inputs.test_user_005_signup; // req.body.user
  db.updateUserTrialSignup(user);
  res.send('User signed up!');
});

app.put('/prime/cancel', (req, res) => {
  let user = inputs.test_user_005_cancel; // req.body.user
  db.updateUserTrialCancel(user);
  res.send('User cancelled!');
});


/* -------------------- SERVER -------------------- */


app.listen(7331, () => console.log('\x1b[32m----- SERVER : http://localhost:7331 -----\x1b[0m'));
