const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const ItensPedido = sequelize.define("itensPedido", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    idPedido: {
        allowNull: true,
        type: Sequelize.INTEGER
    },
    idProduto: {
        allowNull: true,
        type: Sequelize.INTEGER
    },
    valorUnit: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
    },
    quantidade:{
        allowNull: false,
        type: Sequelize.INTEGER
    },
});

module.exports = ItensPedido;