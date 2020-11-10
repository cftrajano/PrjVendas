const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Cliente = sequelize.define("cliente", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome:{
        allowNull: false,
        type: Sequelize.STRING(100),
    },
    cpf:{
        allowNull: false,
        type: Sequelize.STRING(14), 
    },
    telefone:{
        allowNull: true,
        type: Sequelize.STRING(14), 
    },
    endereco: {
        allowNull: false,
        type: Sequelize.STRING(100),
    },
    cidade: {
        allowNull: false,
        type: Sequelize.STRING(50),
    },
    estado: {
        allowNull: false,
        type: Sequelize.STRING(50),
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    },
});

module.exports = Cliente;