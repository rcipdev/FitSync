const express = require('express');

const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

const cookieParser = require('cookie-parser');

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
}

app.use(errorHandlers.productionErrors);
module.exports = app;
