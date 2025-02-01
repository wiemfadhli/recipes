export const Image_home=()=>
{
    return (<div style={{ width: "100%", height: "900px" ,  boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)",
        backgroundImage: "url('home.jpg')",
        backgroundSize: "cover", 
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        
    }}></div>);
}

export const Header = () => {
    return (
      <header ssName="bg-blue-600 text-white p-4 text-center text-xl font-bold"
      style={{
        width: "100%",
        height: "60px",
        backgroundColor:"rgb(10, 2, 0)",
        boxShadow: "5px 5px 5px rgba(248, 248, 248, 0.97)",
        paddingBottom: "10px", 
      }}>
      
      </header>
    );
  };

  export const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2025 My Website. All rights reserved.
      </footer>
    );
  };
