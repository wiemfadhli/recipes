import { useState } from "react";
import "./RecipeForm.css"; // Import the CSS file

export const RecipeForm = ({ onSubmit }) => {
  const [recipe, setRecipe] = useState({
    url: "1.png",
    Prep: "",
    Cook: "",
    title: "",
    prestation: "",
    Ingredients: [""],
    Method: [""],
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, value) => {
    const updatedArray = [...recipe[field]];
    updatedArray[index] = value;
    setRecipe({ ...recipe, [field]: updatedArray });
  };

  const addField = (field) => {
    setRecipe({ ...recipe, [field]: [...recipe[field], ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting recipe:", recipe);  // Log the data before sending
  
    try {
      const response = await fetch("http://localhost:4000/recipes/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
  
      console.log("Response status:", response.status);  // Log response status
  
      // Check if the response contains JSON data
      const contentType = response.headers.get("content-type");
      const responseData = contentType?.includes("application/json")
        ? await response.json()  // Parse JSON response if it's in JSON format
        : await response.text();  // Otherwise, handle as plain text
  
      console.log("Server Response:", responseData);  // Log the response body
  
      if (response.ok) {
        // Success: Clear form and display success message
        alert(`Recipe added successfully! Server message: ${responseData.message || "Recipe added!"}`);
        setRecipe({
          url: "",
          title: "",
          Prep: "",
          Cook: "",
          prestation: "",
          Ingredients: [""],
          Method: [""],
        });
      } else {
        // Error: Display server error message
        alert(`Error adding recipe: ${responseData.message || responseData || "Unknown error"}`);
      }
    } catch (error) {
      // Network Error: Display network error message
      console.error("Network Error:", error);
      alert("Failed to add recipe. Please check your network connection.");
    }
  };
  
  
  


  const handleCancel = () => {
    setRecipe({
      url: "",
      title: "",
      Prep: "",
      Cook: "",
      prestation: "",
      Ingredients: [""],
      Method: [""],
    });
  };

  return (
    <div className="form-container">
      <h2>Add a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Title of recipe:</label>
        <input type="text" name="title" value={recipe.title} onChange={handleChange} required />

        <label>Prep Time (mins):</label>
        <input type="number" name="Prep" value={recipe.Prep} onChange={handleChange} required />

        <label>Cook Time (mins):</label>
        <input type="number" name="Cook" value={recipe.Cook} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="prestation" value={recipe.prestation} onChange={handleChange} required />

        <h3>Ingredients</h3>
        {recipe.Ingredients.map((ingredient, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => handleArrayChange(index, "Ingredients", e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" className="add-btn" onClick={() => addField("Ingredients")}>
          + Add Ingredient
        </button>

        <h3>Method</h3>
        {recipe.Method.map((step, index) => (
          <div key={index} className="input-group">
            <input
              type="text"
              value={step}
              onChange={(e) => handleArrayChange(index, "Method", e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" className="add-btn" onClick={() => addField("Method")}>
          + Add Method
        </button>

        <div className="button-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
