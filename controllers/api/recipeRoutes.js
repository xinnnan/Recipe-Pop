const router = require('express').Router();
const { application } = require('express');
const {Recipe}  = require('../../models');



router.get('/:userID', async (req,res)=>{
    const userID=req.params.userID;
    // const query = 'Select * from recipes where userID = 1';
    try {
    const result = await Recipe.findAll({
        where: {userID: userID},
      });


       res.json(result);
       console.log(result);
       
      //  res.render("userrecipes", {result:recipesData});
      
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

module.exports=router;
