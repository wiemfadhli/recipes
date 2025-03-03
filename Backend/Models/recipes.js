
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: String,
    Prep: Number,
    Cook: Number,
    prestation: String,
    Ingredients: [String],
    Method: [String],
    type:String,
});

// Corrected export: Export the model using the recipeSchema
module.exports = mongoose.model("Recipe", recipeSchema);
