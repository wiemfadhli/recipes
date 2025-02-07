const express = require('express');
const router = express.Router();
// Route to get all recipes
router.get('all/', (req, res)=>
{
    res.send('Hello, World!');
});

// Route to get a recipe by groupe
router.get('/:groupe', (req, res)=>
    {
        const id = req.params.groupe;
        res.send(id);
    });

  // Route to add new a recipe 
  
  router.post('/', (req, res) => {
    const recipe = req.body.name;  
    res.send(recipe);  
});
//Route to delete a recipe 
router.delete('/:id', (req, res)=>
    {
        const id = req.params.id;
        res.send(id);
    });
    router.put('/', (req, res) => {
        const recipe = req.body.name;  
        res.send(recipe);  
    });

    module.exports = router;

