'use strict';

const express = require('express');
const cors = require('cors');
const customerRouter = require('./routes/customers');

const app = express();
// apply global application middleware
app.use(cors());
app.use(express.json());

app.use(customerRouter);

module.exports = {
  start: ({PORT}) => {
    app.listen(PORT, () => {
      console.log('API Server running on ::', PORT);
    })
  },
  app,
}