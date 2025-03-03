const express = require('express');
const router = express.Router();
const Recipe = require('../Models/recipes');
/* 
   GET /recipes/all
   Returns all recipes from the database
*/
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

/* 
   POST /recipes/add
   Adds a new recipe to the database
*/
router.post("/add", async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.send("ok");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/* 
   GET /recipes/:type
   Retrieves all recipes of a specific type
*/
router.get('/:type', async (req, res) => {
    const type = req.params.type;
    try {
        const recipes = await Recipe.find({ type: type }); // Filter by type
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
/* 
   DELETE /recipes/:id
   Deletes a recipe by its ID
*/
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        // Attempt to delete the recipe by ID
        const result = await Recipe.deleteOne({ _id: id });

        // Check if the result is not an acknowledged deletion (i.e., no document found)
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Recipe not found' }); // Return a 404 if no recipe was found
        }

        // If deletion is successful
        res.send('ok');
    } catch (err) {
        // Handle any other errors
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

