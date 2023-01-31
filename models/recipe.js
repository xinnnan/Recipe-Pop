const sequelize = require('../config/connection');
const User = require('./User');

const Recipe=sequelize.define('Recipe',{
    id:{
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type:sequelize.STRING,
        allowNull:false
    },
    ingredients:{
        type:sequelize.TEXT,
        allowNull:false
    },
    instructions:{
        type:sequelize.TEXT,
        allowNull:false
    },
    userID:{
        type:sequelize.INTEGER,
        references:{
            model:User,
            key:'id'
        }
    }

});

module.exports = Recipe;

