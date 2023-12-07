const { Sequelize } = require('sequelize');
const config = require('./config.json');

const db = (database) => {
  const server = {
    database: config[database].database,
    username: config[database].username,
    password: config[database].password,
    config: config[database]
  };

  return new Sequelize(server.database, server.username, server.password, server.config);
}

exports.checkDatabaseConnection = async (sequelize) => {
  try {
    await sequelize.authenticate();
    // console.log('Database connected successfully.');
  } catch (error) {
    // console.error('Error connecting to database:', error.message);
  }
};

// MYSQL
// Server 947
exports.iot_prod = db('iot_prod');
exports.sap_master = db('sap');
// exports.scada_alarm947 = db('scada_alarm947');
// // Server 949
// exports.scada949 = db('scada949');
// // Server 98
// exports.node_red98 = db('node_red98');