const { DataTypes, sequelize } = require("sequelize");


module.exports = (sequelize, DataTypes)=>{
     const Words = sequelize.define('words', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
     })

     return Words;
}