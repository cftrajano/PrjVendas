const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Pedido = sequelize.define("pedido", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    IdCliente:{
        allowNull: true,
        type: Sequelize.INTEGER,
    },
    idUsuario:{
        allowNull: true,
        type: Sequelize.INTEGER, 
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    },
    total:{
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
    },
    formaPagamento: {
        allowNull: false,
        type: Sequelize.ENUM('Dinheiro', 'Débito', 'Crédito', 'VA/VR', 'Crediário'),
    }
});

module.exports = Pedido;