const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');


class Recipe extends Model {}
Recipe.init(
  {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
	title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
	userID:{
        type:DataTypes.INTEGER,
        references:{
            model:User,
            key:'id',
    },
  },
    sequelize,
    modelName: 'recipe',
});

module.exports = Recipe;
