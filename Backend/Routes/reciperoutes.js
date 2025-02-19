const express = require('express');
const router = express.Router();
const Recipe = require('../Models/recipes');
// get all recipes
router.get('/all', async (req, res)=>
{
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
);

//add recipe 
router.post("/add", async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.send("ok");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//get by recipe by type 
router.get('/:type', async (req, res) => {
    const type = req.params.type;
    try {
        const recipes = await Recipe.find({ type: type }); // Filter by type
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
//get by recipe by type 
router.delete('/:id', async (req, res) => {
    const type = req.params.type;
    try {
        const recipes = await Recipe.find({ type: type }); // Filter by type
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// delete 



module.exports = router;

