import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Recipesbytype} from './Recipesbytype ';
export const  Recipepage =()=>
    {

      const [recipeBytype, setRecipeBytype]=useState(false);
      const [typeRecipe,setTypeRecipe]=useState("notype");

      /* Updates the state to display recipes of a specific type.
      *
      * @param {string} type - The type of recipe to display.
      * 
      * Functionality:
      * - Sets `setRecipeBytype(true)`, indicating that a recipe type is selected.
      * - Updates `setTypeRecipe(type)`, storing the selected recipe type.
      */

      const avriable = (type) => {
        setRecipeBytype(true);
         setTypeRecipe(type);
      };
     /*********************************************************************************************
     * Recipe Component
    * This component displays a recipe card with an image and text.
    * When clicked, it triggers the `avriable` function with the provided recipe type.
      ********************************************************************************************/
    const  Recipe = (props)=>
    {
      return (
        <div  onClick={ ()=>{ avriable(props.type)}} style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)", width: "280px", margin: "20px" }}>
        <div style={{ backgroundColor: "blue", color: "black", height: "200px", width: "100%" }}>
        <img style={{ height: "100%", width: "100%" }} src={props.image} alt="Image" />
        </div>
        <div style={{ backgroundColor: "white", height: "80px", width: "100%", position: "relative" }}>
        <h3 style={{ color: "black", textAlign: "center", backgroundColor: "white", height: "100%", width: "100%" }}>{props.text}</h3>
        </div>
        </div>
             );
     }
     /**
     * TypeList Component
     * This component renders a list of recipe categories in a table layout.
     * Each recipe is displayed as a `Recipe` component with an image and text.
     * 
     * Styling:
     * - The container div has full width, a fixed height of 700px, and centers content.
     * - A table is used to align recipe cards in two rows of three columns.
     * - Recipes are styled with equal width in the table.
     * 
     * @returns {JSX.Element} A styled table of recipe categories.
      */
     const TypeList=()=>
     {
      return (
             <div style={{ width: "100%", height: "700px",  marginTop: "-10px" ,textAlign: "center", marginbottom: "30px", }}>
             <table style={{ width: "100%", borderCollapse: "collapse" ,textAlign: "center", marginLeft:"60px"}}>
             <tr>
             <td style={{ width: "33%" }}>
             <Recipe text="Delicious Dinner Recipe " image="1.png" key={1} type=" type"/>
             </td>
             <td style={{ width: "33%" }}>
             <Recipe text="Lunchbox ideas" image="2.jpg" key={2} />
             </td>
             <td style={{ width: "33%" }}>
             <Recipe text="Lunch recipes" image="3.jpg"  key={3}/>
             </td>
             </tr>
             <tr>
             <td style={{ width: "33%" }}>
             <Recipe text="Breakfast recipes" image="4.jpg"  key={4}/>
             </td>
             <td style={{ width: "33%" }}>
            <Recipe text="Pudding and snack recipes" image="5.jpg" key={5} />
            </td>
            <td style={{ width: "33%" }}>
            <Recipe text="Barbecue and picnic recipes" image="6.jpg"  key={6}/>
            </td>
           </tr>
          </table>
          </div> );

      }

      const Image_home = () => {
        return (
            <div  style={{   width: "100%",   height: "800px", backgroundImage: "url('home.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center",  }}   >
      
            </div>
        );
      };


        return (
          <>
          { !recipeBytype&& < Image_home/>}
          { !recipeBytype && <TypeList />}

{
recipeBytype &&  ( <Recipesbytype type= {typeRecipe} />)
}
  
</>

        );
    
      }



    export const RecipeDetails=(props)=>
      {
        return (<>
    
       
      <div  style={{ overflow: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
    
            { /*  i want div for this this all */ }
            <div  style={{ backgroundColor: "#A9A9A9" ,width: "1500px", height:"300px" ,boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
              display: "flex", 
              margin: "20px"
            }}>
    
    
    
      {/* Div on the left */}
      <div 
      style={{
       
        width: "400px",
        float: "left",
        padding: "10px", 
        marginLeft:"10px"
      }}
      >
          <h2 style={{  textAlign: "center"  }}>{props.recipe.title}</h2>
        <p>{props.recipe.prestation} 
        <br/>
    
    
        </p>
    
    
    
    
    
    { /* sconde  div */}
    
    
        
          <ul>
      <li>Prep: {props.recipe.Prep} mins </li>
      <li>Cook: {props.recipe.Cook} mins</li>
      </ul>
    
     
      </div>
    
      
      <img 
        src={props.recipe.url}  
        style={{ 
          width: "400px", 
          float: "right",  // Aligns the image to the right
          padding: "10px", 
          marginright:"20px",
          marginLeft:"600px",
        }} 
        
      />
          </div>
    
    
    
          </div>
    
          <div> 
          <h3  style={{ 
      textAlign: "center", 
    }}> Ingredients</h3>
          <div style={{ 
      marginLeft:"550px",
    }} >
          <ul>
           
      {props.recipe.Ingredients.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
    </div> 
          </div>
    
          <div>
            <h3 style={{ 
      textAlign: "center", 
    }} >  Method </h3>
    
    
    
    
    
            <ol style={{ 
      marginLeft:"550px",
    }} >
           
           {props.recipe.Method.map((text, index) => (
             <li key={index}>{text}</li>
           ))}
         </ol>
          </div>
        </div>
        
        </>); 
      }
    

      











   
