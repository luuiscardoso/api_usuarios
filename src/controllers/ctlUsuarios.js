const usuariosModel = require('../models/mdlUsuarios')
const jwt = require('jsonwebtoken');

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

const buscar = async (req, res) => {
    try{
        const token = req.headers.authentication.split(' ')[1];
        const tokenDecode = jwt.verify(token, process.env.JWT_KEY);

        const id = tokenDecode.insertId
        const algumUsuario = await usuariosModel.buscarUsuario(id);

        return res.status(201).json(algumUsuario);
    } catch(error){
        if (error instanceof jwt.TokenExpiredError){
            return res.status(401).json({"mensagem": "Token expirado"})
        }
        return res.status(401).json({"mensagem": "Não autorizado"});
    }
}

module.exports = {
    criarUsuario,
    entrar,
    buscar
}