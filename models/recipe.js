const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

// const Recipe=sequelize.define('Recipe',{
//     id:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     ingredients:{
//         type:DataTypes.TEXT,
//         allowNull:false
//     },
//     instructions:{
//         type:DataTypes.TEXT,
//         allowNull:false
//     },
//     userID:{
//         type:DataTypes.INTEGER,
//         references:{
//             model:User,
//             key:'id'
//         }
//     }

// });


class Recipe extends Model {
    checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
  }
  Recipe.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        ingredients:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        instructions:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        userID:{
            type:DataTypes.INTEGER,
            references:{
                model:User,
                key:'id'
            }
        },
    },
    
  );



module.exports = Recipe;


