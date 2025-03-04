const request = require('supertest');
const mongoose = require('mongoose'); 
const app = require('../server'); 
const Recipe = require('../Models/recipes');



describe('POST/recipes/add', () => {
    it('should add a new recipe', async () => {
        const newRecipe = {
            title: 'Chocolate Cake',  
            url: 'https://example.com/chocolate-cake',  
            Prep: 20,  
            Cook: 40,  
            prestation: '12 servings',  
            Ingredients: ['Flour', 'Sugar', 'Cocoa', 'Eggs'], 
            Method: ['Mix ingredients', 'Bake at 350°F for 40 minutes'],  
            type: 'Dessert'  
          };
  
      const res = await request(app).post('/recipes/add').send(newRecipe);
  
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('ok');

    });
    afterAll(async () => {
        await Recipe.deleteMany({});
      });
  });

  describe('GET/recipes/:type', () => {
    let recipeId; 
  
    beforeAll(async () => {
      
      await Recipe.deleteMany({});
    
  
      const recipe = await Recipe.create({
        title: 'Chocolate Cake',
        url: 'http://example.com/chocolate-cake',
        Prep: 15,
        Cook: 30,
        prestation: 'Delicious and moist',
        Ingredients: ['flour', 'chocolate', 'butter'],
        Method: ['Mix', 'Bake'],
        type: 'Dessert',
      });
    
    
      recipeId = recipe._id;
    });
  
    it('should return recipes of the specified type', async () => {
      const res = await request(app).get('/recipes/Dessert');
  
      // Assert that the status code is 200
      expect(res.statusCode).toBe(200);
    
      // Assert that the response body is an array
      expect(Array.isArray(res.body)).toBe(true);
  
      // Assert that all recipes in the response have the correct type
      res.body.forEach((recipe) => {
        expect(recipe.type).toBe('Dessert');
      });
    });
  
    it('should return an empty array if no recipes of the specified type are found', async () => {
      // Test for a type that is not present in the database
      const res = await request(app).get('/recipes/NonExistentType');
    
      // Assert that the status code is 200 and an empty array is returned
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([]); // Expect an empty array if no recipes are found
    });
    afterAll(async () => {
        await Recipe.deleteMany({});
      });
  });
  

  describe('DELETE/recipes/:id', () => {
    let recipeId; 
    beforeAll(async () => {
        // Clean up the database before starting tests
        await Recipe.deleteMany({});
      
        // Add a test recipe before tests
        const recipe = await Recipe.create({
          title: 'Chocolate Cake',
          url: 'http://example.com/chocolate-cake',
          Prep: 15,
          Cook: 30,
          prestation: 'Delicious and moist',
          Ingredients: ['flour', 'chocolate', 'butter'],
          Method: ['Mix', 'Bake'],
          type: 'Dessert',
        });
      
        recipeId = recipe._id; // Store the recipe ID for later use in the tests
      });
    it('should delete a recipe by its ID', async () => {
      const res = await request(app).delete(`/recipes/${recipeId}`);
  
      // Assert that the status code is 200 (OK)
      expect(res.statusCode).toBe(200);
      expect(res.text).toBe('ok'); // Assuming your API returns 'ok' after successful deletion
  
      // Try to find the recipe by ID to ensure it's deleted
      const deletedRecipe = await Recipe.findById(recipeId);
      expect(deletedRecipe).toBeNull(); // The recipe should no longer exist
    });
  
    it('should return a 404 error if the recipe is not found', async () => {
      // Use a non-existent ID for testing
      const res = await request(app).delete('/recipes/605c72ef15320712c9b53b84'); // Adjust this to a random non-existent ID
  
      // Assert that the status code is 404 for a non-existent recipe
      expect(res.statusCode).toBe(404);
      expect(res.body.error).toBe('Recipe not found'); // Assuming your API returns this error message for not found recipes
    });
  });

  describe('GET/recipes/all', () => {
    let recipeId;
  
    // Before all tests, ensure database is empty and create a sample recipe
    beforeAll(async () => {
      // Clean up any existing recipes in the database
      await Recipe.deleteMany({});
  
      // Create a recipe for testing
      const recipe = await Recipe.create({
        title: 'Chocolate Cake',
        url: 'http://example.com/chocolate-cake',
        Prep: 15,
        Cook: 30,
        prestation: 'Delicious and moist',
        Ingredients: ['flour', 'chocolate', 'butter'],
        Method: ['Mix', 'Bake'],
        type: 'Dessert',
      });
  
      recipeId = recipe._id;
    });
  
    // Test for retrieving all recipes
    it('should return all recipes', async () => {
      const res = await request(app).get('/recipes/all');
  
      // Assert that the status code is 200 (OK)
      expect(res.statusCode).toBe(200);
  
      // Assert that the response body is an array
      expect(Array.isArray(res.body)).toBe(true);
  
      // Assert that at least one recipe exists in the response
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0].title).toBe('Chocolate Cake'); // Ensure the correct recipe is in the list
    });
  
    // Test for empty database (no recipes)
    it('should return an empty array if no recipes exist', async () => {
      // Delete all recipes for testing this case
      await Recipe.deleteMany({});
  
      const res = await request(app).get('/recipes/all');
  
      // Assert that the status code is 200
      expect(res.statusCode).toBe(200);
  
      // Assert that the response body is an empty array
      expect(res.body).toEqual([]); // Expect an empty array if no recipes are found
    });
  
    // Cleanup after tests
    afterAll(async () => {
      await Recipe.deleteMany({});
    });
  });
