const {sequelize} = require('./db');
const {DataTypes} = require('sequelize');

const words = sequelize.define('Words', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    word:{
        type: DataTypes.STRING,
        unique:true
    }
});

sequelize.sync();

module.exports = words;