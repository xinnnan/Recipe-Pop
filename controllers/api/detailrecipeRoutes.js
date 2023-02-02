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
      //  res.json(result);
      //  res.render('recipedetail', {result});
        console.log(result);
      //  console.log(res.render('recipedetail', {result}))
      const { userID, title, ingredients, instructions } = result[0].dataValues;
       res.render('recipedetail', { userID, title, ingredients, instructions });
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
 
});


module.exports=router;