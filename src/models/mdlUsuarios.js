// aqui vai todas as funcoes que vao interagir com o nosso db e funcoes auxiliares
const conexao = require('./conn');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const cadastrarUsuario = async (objUsuario) => {
    const { nome, email, senha, telefones} = objUsuario;
    const { numero, ddd} = telefones[0];

    const [emailExistente] = await conexao.execute('SELECT * FROM usuarios WHERE email = ?', [email]);

    if(emailExistente.length > 0){
        throw new Error();
    }

    const data = new Date(Date.now()).toUTCString();
    const dataUltimoLogin = new Date(Date.now()).toUTCString();
    
    const qInsereUsuario = 'INSERT INTO usuarios (nome, senha, email, dataCriacao, dataAtualizacao, tel_numero, tel_ddd) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const [usuarioCriado] = await conexao.execute(qInsereUsuario, [nome, senha, email, data, dataUltimoLogin, numero, ddd]);
    
    const insertId = usuarioCriado.insertId;
    
    const token = jwt.sign({email, insertId}, process.env.JWT_KEY, {expiresIn: '30m'});
    
    const qAttUltimoLogin = 'UPDATE usuarios SET dataAtualizacao = ? WHERE id = ?';
    await conexao.execute(qAttUltimoLogin, [dataUltimoLogin, insertId])
    
    const qBuscaEspecifico = 'SELECT id, dataCriacao, dataAtualizacao FROM usuarios WHERE id = ?';
    const [usuario] = await conexao.execute(qBuscaEspecifico, [insertId]);

    return {
        id: usuario[0].id, 
        dataCriacao: usuario[0].dataCriacao, 
        dataAtualizacao: usuario[0].dataAtualizacao,
        ultimoLogin: usuario[0].dataAtualizacao,
        token: token
    };
}

module.exports = {
    cadastrarUsuario
}