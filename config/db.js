const Sequelize = require('sequelize');

let SequelizeConnection = {};

SequelizeConnection.db = new Sequelize('chatapp2', 'root', 'password');

module.exports = SequelizeConnection;
