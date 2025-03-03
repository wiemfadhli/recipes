import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import {  Link } from "react-router-dom";
import {Recipesbytype} from './Recipesbytype ';

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


<Link   to="/admin" > <h2> admin</h2></Link>
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
