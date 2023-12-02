const express = require ('express');
const router = express.Router();
const usuariosController = require("./controllers/ctlUsuarios");

router.post('/signup', usuariosController.criarUsuario);
router.post('/signin', usuariosController.entrar);
router.post('/buscarusuario', usuariosController.buscar);

module.exports = router;