import React from "react";
import Login from "../src/components/Login";
import Profile from "./pages/profile";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
          <Route path="/about" element={<Profile />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/home" element={<Home />} />
        </Routes> 
        </Router>
    </div>
  );
}

export default App;
