// src/components/ButtonWithLogo.js
import React from 'react';
import './ButtonWithLogo.css'; // Asegúrate de que el CSS esté en la misma carpeta

const ButtonWithLogo = ({ logo, buttonText }) => {
    return (
        <div className="button-container">
            <img src={logo} alt="Logo" className="logo" />
            <button className="styled-button">{buttonText}</button>
        </div>
    );
};

export default ButtonWithLogo;
