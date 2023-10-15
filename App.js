/*import axios from 'axios';*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Viewcars from './Viewcars';
import Addv from './Addv'; 
import DeleteCar from './DeleteCar';
import UpdateCar from './UpdateCar';

/*import HomePage from './HomePage'; // Import your Home component*/
import HomePage from './HomePage';
import './App.css';

function App() {

  return (
    <Router>
      <div className="app">
        <main>
          {/* Use Routes to contain your route configurations */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/addcars" element={<Addv />} /> {/* Define the route */}
            <Route path="/viewcars" element={<Viewcars />} />
            <Route path="/deletecars" element={<DeleteCar />} />
            <Route path="/updatecars" element={<UpdateCar />} />

            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
