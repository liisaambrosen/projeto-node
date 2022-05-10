const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log('API online');
})