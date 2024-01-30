const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

if(process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(   
    process.env.DB_NAME, // Ideal to keep secret but shared in schema.sql for collaboration purposes.
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;