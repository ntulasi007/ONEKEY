const DataTypes= require('sequelize');
const sequelize=require('../config/db');
const Product=require('./productModel');
const Leads=sequelize.define({
    lead_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    lead_info:{
        type:DataTypes.JSON,
        allowNull:true
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Product,
            key:'product_id'
        }
    }
});
const createLeads=async ()=>{
    await Leads.sync({force:true})
    console.log('leads table created successfully....');
}

module.exports={Leads,createLeads};


