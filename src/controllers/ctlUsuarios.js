const usuariosModel = require('../models/mdlUsuarios')

const criarUsuario = async (req, res) => {
    try{
        const usuarioCriado = await usuariosModel.cadastrarUsuario(req.body);
        return res.status(201).json(usuarioCriado);
    } catch(error){
        return res.status(401).json({"mensagem": "E-mail já existente"})
    }
}

const entrar = async (req, res) => {
    try{
        const loginSucesso = await usuariosModel.entrarUsuario(req.body);
        return res.status(201).json(loginSucesso);
    } catch(error){
        return res.status(401).json({"mensagem": "Usuário e/ou senha inválidos"});
    }
}

module.exports = {
    criarUsuario,
    entrar
}