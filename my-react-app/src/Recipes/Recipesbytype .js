import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, } from "@mui/material";

export const Recipesbytype =(props)=>
      {

        const [available,setAvailable]= useState(false);
        

        
        const change = ()=> setAvailable(!available );

        
        const prepTime= [
          { key: "1", value: "1", label: "0 to 5 mins" , min:"0", max:"5", filter:"prep"},
          { key: "2", value: "2", label: "6 to 10 mins" , min:"6", max:"10", filter:"prep" },
          { key: "3", value: "3", label: "11 to 15 mins", min:"11", max:"15", filter:"prep" },
          { key: "4", value: "4", label: "More than 15 mins" , min:"16", max:"10000", filter:"prep"}
        ];
    
        const cookingtime = [
          { key: "5", value: "1", label: "0 to 5 mins", min:"0", max:"5", filter:"cooking" },
          { key: "6", value: "2", label: "6 to 10 mins" , min:"6", max:"10", filter:"cooking" },
          { key: "7", value: "3", label: "11 to 15 mins" , min:"11", max:"15", filter:"cooking"},
          { key: "8", value: "5", label: "More than 45 mins",  min:"16", max:"1000", filter:"cooking" },
        ];
    
        const totalTime = [
          { key: "9", value: "1", label: "0 to 15 mins", min:"0", max:"15", filter:"totaltime"  },
          { key: "10", value: "2", label: "16 to 30 mins", min:"16", max:"30", filter:"totaltime"  },
          { key: "11", value: "3", label: "31 to 45 mins", min:"31", max:"45", filter:"totaltime"  },
          { key: "12", value: "5", label: "More than 1 hour" , min:"46", max:"15000", filter:"totaltime" },
        ];

     // 📝 Recipe Component: Displays a recipe card with an image and text
     const Recipe = (props)=>
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
          const [selectedValue, setSelectedValue] = useState();
 
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
              <input  type="radio"  name="option"  value={option.key}  checked={selectedValue === option.key}  onChange={(e) => {
     setSelectedValue(e.target.value);
     alert(`You selected: ${e.target.value}`);
    }}/>
                {option.label}
                 </label>
              </dt>
              ))}
             </dl>
             )}
             </div>
          );
        }

      const RecipeTable = () => {
          const [page, setPage] = useState(0);
          const [rowsPerPage, setRowsPerPage] = useState(6); // Showing 6 recipes per page (2 rows)
          const [filter,setfilter]=useState(0);
          const [recipes, setRecipes] = useState([]); 
          const type=" type 1";
      
          useEffect(() => {
            const fetchData = async () => {
            try {
                const url = `http://localhost:4000/recipes/${encodeURIComponent(type)}`; // Fix the typo here
                const response = await fetch(url, {
                method: "GET",headers: { "Content-Type": "application/json",  }
                        });
                console.log("Response status:", response.status); // Should be 200
                const contentType = response.headers.get("content-type");
                const responseData = contentType?.includes("application/json")
                ? await response.json()  
                : await response.text();  
                setRecipes(responseData);       
                console.log(responseData);
                 }
           catch (error) {
                  console.error("Network Error:", error);
                       
                     }
                };
            
                fetchData(); 
            }, []); 
      
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
                            <Recipe text={recipe.title} image={recipe.url} />
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


        return (
          <>
    <div style={{ display: "flex", height: "900px" }}> 
    {!available && (
      <div style={{   boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",  width: "50px",  height: "800px",  backgroundColor: " rgba(0, 0, 0, 0.91)",  paddingLeft: "10px", color:"white",  display: "flex",  justifyContent: "flex-end",  }} >
        <ArrowBackIosIcon style={{ paddingRight: "0px" ,color:" #A9A9A9"  }} onClick={change} />
      </div>
    )}
    
      
    {available && (
           <div style={{boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",width: "200px",height: "800px",backgroundColor: " rgba(0, 0, 0, 0.91)",padding: "10px",  display: "flex", color:" white", flexDirection: "column",   position: "relative",  }}>
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


    <div style={{     flex: 1,     paddingRight:"0px",     paddingLeft:"10px"   }}  >
        
       < RecipeTable></RecipeTable>
   </div>

    </div>

    

    
    </>
        )








      }