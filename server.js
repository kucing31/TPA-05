require('dotenv').config();
const sequelize = require('./config/db');
const express = require('express');
const app = express();
const routing = require('./routes');


async function testconnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
}


testconnection();
app.use(express.json());
app.use(routing);
// app.use('/roles', rolesRouting);

app.listen(process.env.PORT || 8082, function() {
    console.info('server is online on port 8082');
});





