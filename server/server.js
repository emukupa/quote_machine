const express = require('express');
const routes = require('./api/routes');

// instantiate an express app
const app = express();
routes(app);

module.exports = app;
