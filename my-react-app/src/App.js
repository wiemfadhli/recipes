import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Footer ,Navbar , Home_page,Recipe_page} from './Recipes/Homepage';
import {  Authentication,Singup} from './Recipes/authentication';
import { AdminPage } from './Recipes/admin';
import {Recipepage} from './Recipes/Recipestypes';




const App = () => {
  return (
    <>
  <Router>
      <Navbar  />
      <Routes>
      <Route path="/" element={< Recipepage/>} />
        <Route path="/add" element={<Recipe_page/>} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </Router>

    </>
  );
};

export default App;
