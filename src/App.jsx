// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoanFlow from "./components/loanFlow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flow" element={<LoanFlow/>}/>
      </Routes>
    </Router>
  );
}

export default App;
