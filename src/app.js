/*coracao da nossa api, ja informamos com o "use" que toda requisao vai usar nosso
arquivo de rotas*/

const express = require('express');
const app = express();
const router = require('./router')

app.use(router)

module.exports = app;