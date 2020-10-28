const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Usuario = sequelize.define("usuario", {
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
    email:{
        allowNull: false,
        type: Sequelize.STRING(100),
    },
    senha:{
        allowNull: false,
        type: Sequelize.STRING(50),
    },
    ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true
    }
});

module.exports = Usuario;