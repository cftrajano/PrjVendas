const Produto = require('../models/produto');
const status = require('http-status');

exports.Insert = (req, res, next) =>{
    const descricao = req.body.descricao;
    const quantidade = req.body.quantidade;
    const precoCusto = req.body.precoCusto;
    const precoVenda = req.body.precoVenda;
    const ativo = req.body.ativo;

    Produto.create({
        descricao: descricao,
        quantidade: quantidade,
        precoCusto: precoCusto,
        precoVenda: precoVenda,
        ativo: ativo,        
    })
    .then(produto => {
        if(produto){
            res.status(status.OK).send(produto);
        } else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Produto.findAll()
        .then(produto => {
            if(produto){
                res.status(status.OK).send(produto);
            }
        })
    .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Produto.findByPk(id)
        .then(produto =>{
            if(produto){
                res.status(status.OK).send(produto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const descricao = req.body.descricao;
    const quantidade = req.body.quantidade;
    const precoCusto = req.body.precoCusto;
    const precoVenda = req.body.precoVenda;
    const ativo = req.body.ativo;

    Produto.findByPk(id)
        .then(produto => {
            if (produto) {
                produto.update({
                    descricao: descricao,
                    quantidade: quantidade,
                    precoCusto: precoCusto,
                    precoVenda: precoVenda,
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

    Produto.findByPk(id)
        .then(produto => {
            if (produto) {
                produto.destroy({
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
