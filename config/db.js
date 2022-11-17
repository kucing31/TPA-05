const { Sequelize } = require('sequelize');
const database = require('../db/config');


const sequelize = new Sequelize( {
    username: database.local.username,
    password: database.local.password,
    database: database.local.database,
    host: database.local.host,
    port: database.local.port,
    dialect: database.local.dialect,
  });

module.exports = sequelize;