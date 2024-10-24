// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Catalog from './components/Catalog'; // Nuevo import
import VehicleDetails from './components/VehicleDetails'; // Nuevo import
import tuLogo from './images/Imagen de WhatsApp 2024-05-08 a las 14.14.35_b481522a.jpg';
import './App.css';      // Importa los estilos específicos de la aplicación
import './styles.css';   // Importa tu archivo de estilos


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />  {/* NavBar en la parte superior */}
        <header className="App-header">
          <img src={tuLogo} className="App-logo" alt="logo" />
          <h2>Bienvenido a AVICUEL Tienda Online</h2>
            
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
