const  User  = require('./User');
const  Recipe = require('./recipe.js');
// const  Recipe  = require('./Recipe');

Recipe.belongsTo(User,{
    foreignKey:'userID',
})
User.hasMany(Recipe, {
    foreignKey:'userID',
    onDelete: 'CASCADE',
});

module.exports = {User,Recipe};