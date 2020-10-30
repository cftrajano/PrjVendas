const ItensPedido = require('../models/itensPedido');
const status = require('http-status');

exports.Insert = (req, res, next) =>{
    const idPedido = req.body.idPedido;
    const idProduto = req.body.idProduto;
    const valorUnit = req.body.valorUnit;
    const quantidade = req.body.quantidade;

    ItensPedido.create({
        idPedido: idPedido,
        idProduto: idProduto,
        valorUnit: valorUnit,
        quantidade: quantidade,       
    })
    .then(itensPedido => {
        if(itensPedido){
            res.status(status.OK).send(itensPedido);
        } else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    ItensPedido.findAll()
        .then(itensPedido => {
            if(itensPedido){
                res.status(status.OK).send(itensPedido);
            }
        })
    .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    ItensPedido.findByPk(id)
        .then(itensPedido =>{
            if(itensPedido){
                res.status(status.OK).send(itensPedido);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const idPedido = req.body.idPedido;
    const idProduto = req.body.idProduto;
    const valorUnit = req.body.valorUnit;
    const quantidade = req.body.quantidade;

    ItensPedido.findByPk(id)
        .then(itensPedido => {
            if (itensPedido) {
                itensPedido.update({
                    idPedido: idPedido,
                    idProduto: idProduto,
                    valorUnit: valorUnit,
                    quantidade: quantidade, 
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

    ItensPedido.findByPk(id)
        .then(itensPedido => {
            if (itensPedido) {
                itensPedido.destroy({
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
