const express = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const PedidoController = require('../controllers/pedidoController.js');
const ClienteController = require('../controllers/clienteController.js');
const ProdutoController = require('../controllers/produtoController.js');
const ItensPedidoController = require('../controllers/itensPedidoController.js');
const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SelectAll);
router.get('/usuarios/:id', UsuarioController.SelectDetail);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

router.post('/pedidos', PedidoController.Insert);
router.get('/pedidos', PedidoController.SelectAll);
router.get('/pedidos/:id', PedidoController.SelectDetail);
router.put('/pedidos/:id', PedidoController.Update);
router.delete('/pedidos/:id', PedidoController.Delete);

router.post('/clientes', ClienteController.Insert);
router.get('/clientes', ClienteController.SelectAll);
router.get('/clientes/:id', ClienteController.SelectDetail);
router.put('/clientes/:id', ClienteController.Update);
router.delete('/clientes/:id', ClienteController.Delete);

router.post('/produtos', ProdutoController.Insert);
router.get('/produtos', ProdutoController.SelectAll);
router.get('/produtos/:id', ProdutoController.SelectDetail);
router.put('/produtos/:id', ProdutoController.Update);
router.delete('/produtos/:id', ProdutoController.Delete);

router.post('/itensPedido', ItensPedidoController.Insert);
router.get('/itensPedido', ItensPedidoController.SelectAll);
router.get('/itensPedido/:id', ItensPedidoController.SelectDetail);
router.put('/itensPedido/:id', ItensPedidoController.Update);
router.delete('/itensPedido/:id', ItensPedidoController.Delete);

module.exports = router;