const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("onekey","root","root" ,{
    host: 'localhost',
    dialect: 'mysql'
});


module. exports= sequelize;
