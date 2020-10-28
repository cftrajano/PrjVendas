const Usuario = require('../models/usuario');
const status = require('http-status');

exports.Insert = (req, res, next) =>{
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const senha = req.body.senha;
    const ativo = req.body.ativo;

    Usuario.create({
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha,
        ativo: ativo,
    })
    .then(usuario => {
        if(usuario){
            res.status(status.OK).send(usuario);
        } else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};