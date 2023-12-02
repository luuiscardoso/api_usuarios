const express = require('express');
const app = express();
const router = require('./router')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(router);

module.exports = app;