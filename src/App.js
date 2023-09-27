import React from 'react';
import Login from '../src/components/Login';
import Profile from "./pages/profile";
import Home from "./components/Home";
import Pen from "./components/Pen";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
  
      <Router>
{/*     
        <Routes>
          <Route path="/about" element={<Profile />} />
          <Route exact path="/" element={<Login/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/pen" element={<Pen />} />
        </Routes> */}
      
    </Router>
    </div>
  );
}

export default App;
