const criarUsuario = (req, res) => {
    return res.status(200).json({message: 'controller funcionando'})
}

module.exports = {
    criarUsuario,
}