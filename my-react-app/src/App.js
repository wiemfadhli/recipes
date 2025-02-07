import logo from './logo.svg';
import './App.css';
import { RecipeForm } from './Recipes/admin';


function App() {
  const list = {
    url:"1.png",
    Prep:"20",
    Cook:"35",
    title:"Veggie Spag Bol Recipe",
    prestation:"This easy vegetarian spaghetti Bolognese is packed with vegetables, making it healthier and very tasty too.",
    Ingredients:["300g frozen vegetarian mince","1 large onion, chopped","2 garlic cloves, crushed","1 teaspoon red (or green) chopped chilli",
      "2 celery sticks","1 carrot, chopped","1 aubergine, finely chopped","1 cube reduced-salt vegetable stock with 400ml boiled water",
      "1 can chopped tomatoes","2 teaspoons dried Italian mixed herbs","2 tablespoons tomato purée","200g mushrooms, sliced",
      " 250g dried wholemeal spaghetti","1 pinch ground black pepper"
    ],
    Method:["Heat a large heavy-based saucepan. Add in the frozen vegetarian mince, onion, garlic, chilli, celery, carrot, aubergine and vegetable stock. Bring to the boil.",
      "Add the tomatoes, dried herbs, tomato purée and mushrooms. Stir well. Simmer, partially covered, for 25 to 30 minutes, adding a little extra water if needed. Season with pepper.",
      "About 15 minutes before you want to eat, cook the spaghetti in plenty of boiling water for 10 to 12 minutes, or according to pack instructions. Drain well, share between 4 warm plates and top with the Bolognese sauce."
    ]


      
  }
  return (
    
    <>
    
<RecipeForm></RecipeForm>


</>


      
  );
}

export default App;
