const Sequelize = require('sequelize');
require('dotenv').config();

console.log("Database:", process.env.DB_NAME);
console.log("User:", process.env.DB_USER);
console.log("Password:", process.env.DB_PASSWORD);

const sequelize = new Sequelize(   
  process.env.DB_NAME, 
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;