import React from 'react';
import './App.css';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Basket from './components/Basket';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Products/>} />
          <Route path = "/cart" element = {<Basket/>}  />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
