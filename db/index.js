const mysql = require('mysql');

const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gallery',
};
const connection = mysql.createConnection(mysqlConfig);
module.exports = connection;
