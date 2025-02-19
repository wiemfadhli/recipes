import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// recipe  
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

    // list recipe 
  
    export const  ListRecipe=()=>
    {
        return (
            <div style={{ width: "100%", height: "700px",  marginTop: "-10px" ,textAlign: "center", marginbottom: "30px", 
            
            }}>

  <table style={{ width: "100%", borderCollapse: "collapse" ,textAlign: "center", marginLeft:"60px"}}>
    <tr>
      <td style={{ width: "33%" }}>
        <Recipe text="Delicious Dinner Recipe " image="1.png" key={1} />
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
</div>

        );
    }

    // filter  
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
// list filter
  export const Listfilter
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

{!available && (
  <div
    style={{
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
      width: "50px",
      height: "800px",
      backgroundColor: "white",
      paddingLeft: "10px",
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
      backgroundColor: "white",
      padding: "10px",
      display: "flex",
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
</>
    );
  }
  // page of Recipe Details

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

