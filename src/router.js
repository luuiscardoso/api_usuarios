// aqui vai as rotas da nossa api

const express = require ('express');
const router = express.Router();
const usuariosController = require("./controllers/ctlUsuarios");

/*quando fizermos uma req, ele vai bater aqui no router nessa rota e vai chamar
a funcao de criar usuario la da nossa controller, que vai chamar
alguma funcao da nossa model*/
router.post('/signup', usuariosController.criarUsuario);

module.exports = router;