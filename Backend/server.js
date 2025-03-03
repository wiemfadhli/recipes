const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors package
const connectDB = require('./config/conDB');
const mongoose = require('mongoose');
const recipeRoutes = require('./Routes/reciperoutes'); // Corrected path
const userRoutes = require('./Routes/userRoutes');

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors()); // This enables CORS for all routes

// Connect to Database
connectDB();

// Use the recipe routes
app.use('/recipes', recipeRoutes);
app.use("/user",userRoutes)

module.exports = app;

// Start the server in a separate file (for production use)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

