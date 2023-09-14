import React from 'react';
import Login from '../src/components/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
  
      <Router>
    
        <Routes>
          
          <Route exact path="/login" element={<Login/>}/>
         
        </Routes>
      
    </Router>
    </div>
  );
}

export default App;
