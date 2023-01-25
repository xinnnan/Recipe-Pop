const router = require('express').Router();

router.get('/recipes', async (req, res) => {
    try {

    } catch (err) {
      res.status(500).json(err);
    }  
});

router.post('/newrecipe', async (req, res) => {
    try {

    } catch (err) {
      res.status(500).json(err);
    }  
});

module.exports = router;