// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Asegúrate de crear este archivo para estilos

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Mi Tienda de Vehículos</h1>
      <ul className="navbar-links">
        <li>
          <Link className="boton-navbar" to="/">Inicio</Link>
        </li>
        <li>
          <Link className="boton-navbar" to="/catalog">Catálogo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
