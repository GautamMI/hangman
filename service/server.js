const express = require('express');
const apiRoutes = require('./routes');
const cors = require('cors');

const {sequelize, connectToDb} = require('./model/index.js');

const app = express();
const PORT = 3001;

app.listen(PORT, async ()=>{
    console.log('listening on PORT 3000');
    await connectToDb();
});

app.use(cors({
    origin: '*'
}));


app.use('/', apiRoutes);

