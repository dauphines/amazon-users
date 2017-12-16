const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Aloha Universe!'));
app.listen(7331, () => console.log('----- server : http://localhost:7331 -----'));
