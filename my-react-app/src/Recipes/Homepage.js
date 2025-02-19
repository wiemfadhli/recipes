import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import {  Link } from "react-router-dom";
import {  ListRecipe,RecipeDetails} from './Recipestypes';
import {Recipesbytype} from './Recipesbytype ';
const Image_home = () => {
  return (
      <div
          style={{
              width: "100%",
              height: "800px",
              backgroundImage: "url('home.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
          }}
      >

      </div>
  );
};


export const Home_page= ()=>
{

return (

  <>
  <Image_home></Image_home>
  < ListRecipe ></ListRecipe>
  </>
);
}
export const Recipe_page=()=>
{
return (<>
<Recipesbytype></Recipesbytype>

</>);
}



export const Navbar  = () => {
  return (
    <header
      style={{
        width: "100%", 
        height: "50px", 
        backgroundColor: "rgba(255, 254, 254, 0.97)", 
        boxShadow: "5px 5px 5px rgba(238, 230, 230, 0.97)", 
        display: "flex",          
        justifyContent: "space-between",  
        alignItems: "center",
       
      }}
    >
     
     <nav style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
  {/* Home Link with Icon */}
  <Link 
    to="/" 
    style={{ 
      display: "flex", 
      alignItems: "center", 
      textDecoration: "none", 
      color: "black" 
    }}
  >
    <HomeSharpIcon style={{ fontSize: 30, marginRight: "0px" }} />
  </Link>

  {/* Add Person Link with Icon */}
  <Link 
    to="/add" 
    style={{ 
      display: "flex", 
      alignItems: "center", 
      textDecoration: "none", 
      color: "black" 
    }}
  >
    <PersonAddAltOutlinedIcon style={{ fontSize: 30, marginRight: "0px" }} />
  </Link>
</nav>

    </header>
  );
};

  export const Footer = () => {
    return (
      <footer style={{
        width: "100%", 
        height: "80px", 
        backgroundColor: "rgba(14, 13, 13, 0.97)", 
        boxShadow: "5px 5px 5px rgba(238, 230, 230, 0.97)",
        marginTop: "5px" 
      
      }} >
       <h3 style={{
      color:"rgba(250, 245, 245, 0.97)",
      textAlign:"center" 
      }}> © 2025 My Website. All rights reserved.</h3>
      </footer>
    );
  };
