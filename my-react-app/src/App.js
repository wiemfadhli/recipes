import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Footer ,Navbar , Home_page} from './Recipes/Homepage';




const App = () => {
  return (
    <>
    <Router>
      <Navbar  />
      <Routes>
      <Route path="/" element={< Home_page/>} />
        <Route path="/add" element={<div>Add Person Page</div>} />
      </Routes>
      <Footer />
    </Router>

    </>
  );
};

export default App;
