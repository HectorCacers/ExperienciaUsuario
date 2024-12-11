const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('foodApp', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Restaurant = sequelize.define('Restaurant', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.STRING },
});

const RestaurantAvailability = sequelize.define('RestaurantAvailability', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    restaurant_id: { type: DataTypes.INTEGER, allowNull: false },
    date_time: { type: DataTypes.DATE, allowNull: false },
    reserved: { type: DataTypes.BOOLEAN, defaultValue: false },
    reserved_by: { type: DataTypes.STRING },
});

module.exports = { Restaurant, RestaurantAvailability, sequelize };
