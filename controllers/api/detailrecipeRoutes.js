const router = require('express').Router();
const { application } = require('express');
const {Recipe}  = require('../../models');

router.get('/:recipeid', async (req,res)=>{
    const recipeid=req.params.recipeid;
    // const query = 'Select * from recipes where userID = 1';
    try {
    const result = await Recipe.findAll({
        where: {
          recipeid: recipeid,
        }
      });
      // res.json(result);
      res.render('recipedetail', result);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
 
});


module.exports=router;