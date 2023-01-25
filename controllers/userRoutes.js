const router = require('express').Router();

router.get('/newUser', async (req, res) => {
    try {

    } catch (err) {
      res.status(500).json(err);
    }  
});

router.post('/login', async (req, res) => {
    try {

    } catch (err) {
      res.status(500).json(err);
    }  
});

router.post('/logout', async (req, res) => {
    try {

    } catch (err) {
      res.status(500).json(err);
    }  
});

module.exports = router;