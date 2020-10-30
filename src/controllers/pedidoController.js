const Pedido = require('../models/pedido');
const status = require('http-status');

exports.Insert = (req, res, next) =>{
    const idCliente = req.body.idCliente;
    const idUsuario = req.body.idUsuario;
    const ativo = req.body.ativo;
    const total = req.body.total;
    const formaPagamento = req.body.formaPagamento;

    Pedido.create({
        idCliente: idCliente,
        idUsuario: idUsuario,
        ativo: ativo,
        total: total,
        formaPagamento: formaPagamento,
    })
    .then(pedido => {
        if(pedido){
            res.status(status.OK).send(pedido);
        } else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Pedido.findAll()
        .then(pedido => {
            if(pedido){
                res.status(status.OK).send(pedido);
            }
        })
    .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Pedido.findByPk(id)
        .then(pedido =>{
            if(pedido){
                res.status(status.OK).send(pedido);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const idCliente = req.body.idCliente;
    const idUsuario = req.body.idUsuario;
    const ativo = req.body.ativo;
    const total = req.body.total;
    const formaPagamento = req.body.formaPagamento;

    Pedido.findByPk(id)
        .then(pedido => {
            if (pedido) {
                pedido.update({
                    idCliente: idCliente,
                    idUsuario: idUsuario,
                    ativo: ativo,
                    total: total,
                    formaPagamento: formaPagamento,
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

    Pedido.findByPk(id)
        .then(pedido => {
            if (pedido) {
                pedido.destroy({
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
