const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const detailrecipeRoutes = require('./detailrecipeRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/recipe', detailrecipeRoutes);
module.exports = router;
