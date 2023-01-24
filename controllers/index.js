const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/', homeRoutes);
router.use('/', userRoutes)
router.use('/', recipeRoutes);

module.exports = router;