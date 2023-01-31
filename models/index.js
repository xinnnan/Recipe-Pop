const { User } = require('./models');
const { Recipe } = require('./models');

Recipe.belongsTo(User,{
    foreignKey:'userID',
})
User.hasMany(Recipe, {
    foreignKey:'userID',
    onDelete: 'CASCADE',
});

module.exports = {User,Recipe};