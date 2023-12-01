const usuariosModel = require('../models/mdlUsuarios')

const criarUsuario = async (req, res) => {
    try{
        const usuarioCriado = await usuariosModel.cadastrarUsuario(req.body);
        return res.status(201).json(usuarioCriado);
    } catch(error){
        return res.status(401).json({"mensagem": "E-mail já existente"})
    }
}

module.exports = {
    criarUsuario
}