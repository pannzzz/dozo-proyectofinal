// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HowToPage from './pages/HowToPage';
import Login from './pages/Login';
import Register from './pages/Register'; // Importa el componente de registro
import FindGiftPage from './pages/FindGiftPage';
import Carrito from './components/carritocomponent';
import MoreDetails from './components/MoreDetails';
import Pagos from './pages/pagos';
import { CartProvider } from './components/CartContext'; // Importa el contexto del carrito
import MisPedidos from './components/MisPedidos';
import './App.css';

const App = () => {
  return (
    <CartProvider> {/* Proveedor del carrito envuelve toda la aplicación */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/howto" element={<HowToPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* Nueva ruta de registro */}
            <Route path="/findgift" element={<FindGiftPage />} /> {/* Nueva ruta para encontrar regalos */}
            <Route path="/carrito" element={<Carrito />} /> {/* Nueva ruta para el carrito */}
            <Route path="/pagos" element={<Pagos />} /> {/* Nueva ruta para los pagos */}
            <Route path="/detalles/:id" element={<MoreDetails />} />
            <Route path="/mispedidos" element={<MisPedidos />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
