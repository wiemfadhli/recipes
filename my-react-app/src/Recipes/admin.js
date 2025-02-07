import { useState } from "react";
import "./RecipeForm.css"; // Import the CSS file

export const RecipeForm = ({ onSubmit }) => {
  const [recipe, setRecipe] = useState({
    url: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipe);
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
})
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
        <button type="button" className="add-btn" onClick={() => addField("Ingredients")}>+ Add Ingredient</button>

        <h3> ADD Method </h3>
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
        <button type="button" className="add-btn" onClick={() => addField("Method")}>+ Add Method </button>

        <div className="button-group">
  <button type="submit" className="submit-btn">Submit</button>
  <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
</div>
      </form>
    </div>
  );
};


