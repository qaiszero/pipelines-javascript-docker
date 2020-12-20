'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Testing Azure build pipeline\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
