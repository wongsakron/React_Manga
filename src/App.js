import React from 'react';
import {  Routes, Route } from "react-router-dom";
import './App.css';
// Pagaes
import Home from './pages/home';
import About from './pages/About';

function App() {

  return (
    <div className="App">
       
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
          </Routes>
       
    </div>
  );
}

export default App;
