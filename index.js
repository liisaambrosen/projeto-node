const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use('/', router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log('API online');
})