import { useState,  useEffect } from "react";
import "./RecipeForm.css"; // Import the CSS file
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper,} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    url: "1.png",
    Prep: "",
    Cook: "",
    title: "",
    type:"",
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
  const removeField = (field) => {
    if (recipe[field].length > 1) {
      setRecipe({ ...recipe, [field]: recipe[field].slice(0, -1) });
    }
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
          url: "image.url",
          title: "",
          Prep: "",
          Cook: "",
          prestation: "",
          type:"",
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
    <div className="form-container" style={{shadow: "10px 10px 10px rgba(0, 0, 0, 0.5)"}}>
      <h2>Add a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>Title of recipe:</label>
        <input type="text" name="title" value={recipe.title} onChange={handleChange}  pattern="[A-Za-z\s]+"  required />

        <label>Prep Time (mins):</label>
        <input type="number" name="Prep" value={recipe.Prep} onChange={handleChange} required />

        <label>Cook Time (mins):</label>
        <input type="number" name="Cook" value={recipe.Cook} onChange={handleChange} required />
        <label>Type</label>
        <input type="text" name="type" value={recipe.type} onChange={handleChange}  pattern="[A-Za-z\s]+"  required />

        <label>Description:</label>
        <textarea name="prestation" value={recipe.prestation} onChange={handleChange} required  />

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













export const AdminPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [ addrecipe, setAddrecipe]=useState(false);
  const [ uprecipe,setUprecipe]=useState(false);
  const [recipes, setRecipes] = useState([]);
  const [ delecipe,setdelecipe]=useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/recipes/all") 
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [delecipe]);

  const handleDelete = (id) => {

    setdelecipe(!delecipe);
    fetch(`http://localhost:4000/recipes/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete the recipe");
          alert("no woek");
        }
        return response.json();
      })
      .catch((error) => console.error("Error deleting recipe:", error));
  };
const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
const displayedRecipes = recipes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <>
    { ! addrecipe && ! uprecipe  && <div style={{shadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
      
    
      <Paper sx={{ width: "80%", margin: "20px auto", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Recipe 
                </TableCell>
                <TableCell    align="center" style={{ fontWeight: "bold", fontSize: "18px" }}> Type </TableCell> 

                <TableCell    align="center" style={{ fontWeight: "bold", fontSize: "18px" }}> Actions </TableCell> 

              </TableRow>
            </TableHead>
            <TableBody>
              {displayedRecipes.map((recipe) => (
                <TableRow key={recipe.id}>
                  <TableCell align="center">{recipe.title}</TableCell>
                  <TableCell align="center">{recipe.type}</TableCell>
                  <TableCell  align="center" > <button style={{ backgroundColor: "yellow",
        fontWeight: "bold",
        color: "black", 
        border: "none",
        padding: "10px 10px",
        borderRadius: "5px",
        }} key={recipe.id} onClick={()=>setUprecipe(true)}>
      <EditIcon/>
        </button> <button style={{  backgroundColor: "red", 
        fontWeight: "bold",
        color: "black", 
        border: "none",
        padding: "10px 10px",
        borderRadius: "5px",}} onClick={() => handleDelete(recipe._id)} >
      <DeleteIcon style={{ color: "white" }}   />
        </button> 
      </TableCell>

    
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[ 6, 9, 12, 15, 18]}
          component="div"
          count={recipes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <div style={{  paddingLeft:"150px"}}>
        <button style={{ backgroundColor: "blue",
       fontWeight: "bold",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
       
      }} onClick={()=> setAddrecipe(true)}>
        Add recipe <AddIcon />
        </button>
      </div>


    </div>}
    { addrecipe && <div > <RecipeForm ></RecipeForm> </div>}
    { uprecipe && <div> update recipe </div>}
    </>
    
  );
};

