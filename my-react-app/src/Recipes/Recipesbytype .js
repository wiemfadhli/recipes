/***************************************************************************************************************************************** 

This code contains:
1) **Recipe**: Component that displays a recipe image and its title.
2) **Filter**: Component that allows filtering recipes by preparation and cooking time.
3) **RecipeTable**: Component that displays a paginated table of recipes grouped by type.
4) **Recipesbytype**: Component that combines recipe image display, filter options, and the recipe table by type.

*****************************************************************************************************************************************/




import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
  } from "@mui/material";

  

// RecipeTable Component: Displays a paginated table of recipes grouped into rows of 3
function  Recipe  (props)
    {
    return (
        <div style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)", width: "280px", margin: "20px" }}>
    <div style={{ backgroundColor: "blue", color: "black", height: "200px", width: "100%" }}>
        <img style={{ height: "100%", width: "100%" }} src={props.image} alt="Image" />
    </div>
    <div style={{ backgroundColor: "white", height: "80px", width: "100%", position: "relative" }}>
        <h3 style={{ color: "black", textAlign: "center", backgroundColor: "white", height: "100%", width: "100%" }}>
            {props.text}
        </h3>
    </div>
</div>
    );
    }


// Filter Component: Allows filtering based on given criteria (e.g., prep time, cooking time)
const Filter = (propos)=>
    {
      const [isVisible, setIsVisible] = useState(false);
      const [selectedValue, setSelectedValue] = useState(null);

    
    
      return (
    <div>
      <p style={{ cursor: "pointer" }} onClick={() => setIsVisible(!isVisible)}>
        {propos.text}
      </p>
    
      {isVisible && (
        <dl>
          {propos.list.map((option, index) => (
            <dt key={option.key}>
            <label>
              <input
                type="radio"
                name="option"
                value={option.value}
                checked={selectedValue === option.value}
                onChange={(e) => setSelectedValue(e.target.value)}
              />
              {option.label}
            </label>
          </dt>
          ))}
        </dl>
      )}
    </div>
    
    
      );
    }

// RecipeTable Component: Displays a paginated table of recipes grouped into rows of 3

const recipes = [
  { id: 1, text: "Recipe 1", image: "1.png" },
  { id: 2, text: "Recipe 2", image: "1.png" },
  { id: 3, text: "Recipe 3", image: "1.png" },
  { id: 4, text: "Recipe 4", image: "1.png" },
  { id: 5, text: "Recipe 5", image: "1.png" },
  { id: 6, text: "Recipe 6", image: "1.png" },
  { id: 7, text: "Recipe 7", image: "1.png" },
  { id: 8, text: "Recipe 8", image: "1.png" },
  { id: 9, text: "Recipe 9", image: "1.png" },
  { id: 10, text: "Recipe 10", image: "1.png" },
  { id: 11, text: "Recipe 11", image: "1.png" },
  { id: 12, text: "Recipe 12", image: "1.png" },
  { id: 13, text: "Recipe 13", image: "1.png" },
  { id: 14, text: "Recipe 14", image: "1.png" },
  { id: 15, text: "Recipe 15", image: "1.png" },
];

const RecipeTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6); // Showing 6 recipes per page (2 rows)
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    // Group recipes into chunks of 3
    const groupedRecipes = [];
    const displayedRecipes = recipes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
    for (let i = 0; i < displayedRecipes.length; i += 3) {
      groupedRecipes.push(displayedRecipes.slice(i, i + 3));
    }
  
    return (
      <Paper sx={{ width: "80%", margin: "20px auto", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} align="center" style={{ fontWeight: "bold", fontSize: "18px" }}>
                  Recipe List
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {groupedRecipes.map((group, index) => (
                <TableRow key={index}>
                  {group.map((recipe) => (
                    <TableCell key={recipe.id}>
                      <Recipe text={recipe.text} image={recipe.image} />
                    </TableCell>
                  ))}
                  {/* Fill empty cells if the last row has fewer than 3 recipes */}
                  {Array(3 - group.length)
                    .fill(null)
                    .map((_, i) => (
                      <TableCell key={`empty-${index}-${i}`} />
                    ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[3, 6]}
          component="div"
          count={recipes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  };



// Recipesbytype Component: Combines filter and recipe table for a complete page
export const Recipesbytype
      =()=>
      {
        const [available,setAvailable]= useState(false);
        const change = ()=> setAvailable(!available );
        const prepTime= [
          { key: "1", value: "1", label: "0 to 5 mins" },
          { key: "2", value: "2", label: "6 to 10 mins" },
          { key: "3", value: "3", label: "11 to 15 mins" },
          { key: "4", value: "4", label: "More than 15 mins" }
        ];
    
        const cookingtime = [
          { key: "1", value: "1", label: "0 to 10 mins" },
          { key: "2", value: "2", label: "11 to 20 mins" },
          { key: "3", value: "3", label: "21 to 30 mins" },
          { key: "4", value: "4", label: "31 to 45 mins" },
          { key: "5", value: "5", label: "More than 45 mins" },
        ];
    
        const totalTime = [
          { key: "1", value: "1", label: "0 to 15 mins" },
          { key: "2", value: "2", label: "16 to 30 mins" },
          { key: "3", value: "3", label: "31 to 45 mins" },
          { key: "4", value: "4", label: "46 to 60 mins" },
          { key: "5", value: "5", label: "More than 1 hour" },
        ];
        return (
          <>
    <div style={{ display: "flex", height: "900px" }}> 
    {!available && (
      <div
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
          width: "50px",
          height: "800px",
          backgroundColor: " rgba(0, 0, 0, 0.91)",
          paddingLeft: "10px",
          color:"white",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ArrowBackIosIcon style={{ paddingRight: "0px" ,color:" #A9A9A9"  }} onClick={change} />
      </div>
    )}
    
      
    {available && (
      <div
        style={{
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
          width: "180px",
          height: "800px",
          backgroundColor: " rgba(0, 0, 0, 0.91)",
          padding: "10px",
          display: "flex",
          color:" white",
          flexDirection: "column",
          position: "relative", // Ensures proper alignment of child elements
        }}
      >
        {/* Arrow aligned to the right */}
        <div style={{ alignSelf: "flex-end" }}>
          <ArrowForwardIosIcon onClick={change}   style={{ color:" #A9A9A9"  }}  />
        </div>
    
        {/* Filters aligned to the left */}
        <div style={{ paddingLeft: "0px", marginTop: "10px" }}>
          <Filter text="Prep time" list={prepTime} />
          <Filter text="Cooking time" list={cookingtime} />
          <Filter text="Total time" list={totalTime} />
        </div>
      </div>
    )}
    





    <div
        style={{
          flex: 1,
          paddingRight:"0px",
          paddingLeft:"10px"
        }}
      >
        
       < RecipeTable></RecipeTable>
   </div>

    </div>

    

    
    </>
    
    
    
    
    
        );
      }
    
    
    

    
   
    