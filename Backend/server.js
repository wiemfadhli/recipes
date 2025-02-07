const express = require('express');
const bodyParser = require('body-parser');
const recipeRoutes = require("./routes/recipeRoutes");
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Use the recipe routes
app.use('/recipes', recipeRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});