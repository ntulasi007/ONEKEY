const express = require('express');
const sequelize = require('./config/db');
const port = 8080;
const app = express();
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
app.get('/',(req,res)=>{
    res.json('Welcome to OneKey....');
});
app.listen(port,()=>{
    console.log(`Server is Running on ${port}`);
});


