const { Model, DataTypes } = require('sequelize');
const sequelize = require (../config/connection);

class User extends Model {}

User.init({
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    Username: {
        type: DataTypes.STRING,
        alllowNull: false,
        unique: true
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, { sequelize, modelName: 'user' });

module.exports = User;