import {BrowserRouter, Routes,Route} from "react-router-dom"
import React from 'react';
import Header from "./components/Header";
import './App.css';
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CoinPage/:id" element={<CoinPage/>} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
