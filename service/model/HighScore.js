const { DataTypes, sequelize } = require("sequelize");


module.exports = (sequelize, DataTypes)=>{
     const highscore = sequelize.define('highscore', {
        user_id:{
            type: DataTypes.INTEGER,
            references:{
                model:'user',
                key:'id'
            }
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
     })

     return highscore;
}