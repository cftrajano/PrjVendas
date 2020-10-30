const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Produto = sequelize.define("produto", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    descricao: {
        allowNull: false,
        type: Sequelize.STRING(100)
    },
    quantidade: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,3)
    },
    unidadeMedida: {
        allowNull: false,
        type: Sequelize.STRING
    },
    preco:{
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    },
});

module.exports = Produto;