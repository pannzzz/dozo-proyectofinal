// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HowToPage from './pages/HowToPage';
import Login from './pages/Login';
import Register from './pages/Register'; // Importa el componente de registro
import FindGiftPage from './pages/FindGiftPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/howto" element={<HowToPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Nueva ruta de registro */}
          <Route path="/findgift" element={<FindGiftPage />} /> {/* Nueva ruta para encontrar regalos */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
