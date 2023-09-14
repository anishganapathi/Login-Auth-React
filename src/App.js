import React from 'react';
import Login from '../src/components/Login';
import Profile from "./pages/profile";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
  
      <Router>
    
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route exact path="/" element={<Login/>}/>
         
        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
