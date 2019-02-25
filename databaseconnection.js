/*
Connect to mysql database with sequelize
*/

// Packages
const Sequelize = require('sequelize');

// Credentials
const credentials = require('./credentials/databaseCredentials');

module.exports.connect = function() {
  return new Sequelize(credentials.dbname, credentials.username, credentials.pw, {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  });
}