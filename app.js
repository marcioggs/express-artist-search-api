const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const artist = require('./routes/artist');
const notFound = require('./routes/not-found');
const errorHandler = require('./routes/error-handler');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/artist', artist);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
