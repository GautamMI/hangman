const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'sql12628428',
    'sql12628428',
    'AJG9K3Hf3Z',
    {
        dialect:'mysql',
        host:'sql12.freesqldatabase.com'
    }
);

const connectToDb = async () => {
    try{
      await sequelize.authenticate();
      console.log('Successfully connected to DB');
    }catch(e){
      console.log(e);
      throw e;
    }
}

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

// 1 to many

db.user.HasMany(db.highscore, {
    foreignkey:'user_id',
    as: 'highscore'
})

db.highscore.belongTo(db.user, {
    foreignKey: 'user_id',
    as: 'user'
})

module.exports = {sequelize, connectToDb};