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
    export const  ListRecipe=()=>
    {
        return (
            <div style={{ width: "80%", height: "600px",  marginTop: "10px" ,}}>
  <h1 style={{ textAlign: "center",color: "white", backgroundColor:"hsla(120, 4.50%, 39.00%, 0.47)",height:"50px" }}>Recipe Collections</h1>
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
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

  export const Filter= ()=>
  {
    return (<div style={{ 
      boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)", 
      width: "200px", 
      height:  "600px", 
      backgroundColor: "white" 
  }}>
      <h1>Ok for this solution</h1>
  </div>); 
  }

