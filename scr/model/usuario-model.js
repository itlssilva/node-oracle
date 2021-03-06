'use struct'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('ACESSCONTROL','accesscontrol','accesscontrol',{dialect: "oracle"});

const Usuario = sequelize.define('usuario', {
    id: {
        type: Sequelize.DECIMAL,
        primaryKey: true,
        autoIncrement: true,
        field: 'USUA_ID'
    },
    nome: {
        type: Sequelize.STRING,
        field: 'USUA_NOME'
    },
    senha: {
        type: Sequelize.STRING,
        field: 'USUA_SENHA'
    },
    tableName: "USUARIO",
    timestamps: false
});

let usuario = Usuario.findAll({
    where: {
        id: 4005
    }
});

console.log(usuario);