const { Model, DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User');


const Recipe=sequelize.define('Recipe',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    ingredients:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    instructions:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    userID:{
        type:Sequelize.INTEGER,
        references:{
            model:User,
            key:'id'
        }
    }

})