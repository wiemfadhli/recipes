import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Footer ,Navbar , Home_page,Recipe_page} from './Recipes/Homepage';
import {  Authentication,Singup} from './Recipes/authentication'


/*
  <Router>
      <Navbar  />
      <Routes>
      <Route path="/" element={< Home_page/>} />
        <Route path="/add" element={<Recipe_page/>} />
      </Routes>
      <Footer />
    </Router>
*/

const App = () => {
  return (
    <>
<Singup></Singup>

    </>
  );
};

export default App;
