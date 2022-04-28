const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud', 'sa', '123', {
    host: 'localhost',
    dialect:  'mssql',
    port: 1433,
  });


  try {
    sequelize.authenticate()
    console.log('Conectamos com o Sequelize!')
  } catch (error) {
    console.error('Não foi possível conectar:', error)
  }
  
  module.exports = sequelize
  