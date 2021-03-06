const Cliente = require('../models/cliente');
const status = require('http-status');

exports.Insert = (req, res, next) =>{
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const ativo = req.body.ativo;

    Cliente.create({
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        ativo: ativo,
    })
    .then(cliente => {
        if(cliente){
            res.status(status.OK).send(cliente);
        } else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Cliente.findAll()
        .then(cliente => {
            if(cliente){
                res.status(status.OK).send(cliente);
            }
        })
    .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(cliente =>{
            if(cliente){
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const telefone = req.body.telefone;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const ativo = req.body.ativo;

    Cliente.findByPk(id)
        .then(cliente => {
            if (cliente) {
                cliente.update({
                    nome: nome,
                    cpf: cpf,
                    telefone: telefone,
                    endereco: endereco,
                    cidade: cidade,
                    estado: estado,
                    ativo: ativo,
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Cliente.findByPk(id)
        .then(cliente => {
            if (cliente) {
                cliente.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
    .catch(error => next(error));
};