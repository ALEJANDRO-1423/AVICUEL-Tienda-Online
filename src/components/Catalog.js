// src/components/Catalog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css'; // Asegúrate de importar el archivo CSS

function Catalog() {
  const vehicles = [
    { id: 1, name: 'CHEVROLET', logo: "Chevrolet.jpg" },
    { id: 2, name: 'RENAULT', logo: "Renault.png" },
    { id: 3, name: 'MAZDA', logo: "Mazda.jpg" },
    { id: 4, name: 'NISSAN', logo: "Nissan.jpg" },
    { id: 5, name: "KIA", logo: "Kia.jpg"},
    { id: 6, name: "TOYOTA", logo: "Toyota.jpg" },
    { id: 7, name: "HYUNDAI", logo: "Hyundai.jpg"},
    { id: 8, name: "VOLKSWAGEN", logo: "Volkswagen.jpg"},
    { id: 9, name: "SUZUKI", logo: "Suzuki.jpg"},
    { id: 10, name: "FIAT", logo: "Fiat.jpg"},
    { id: 11, name: "PEUGEOT", logo: "Peugeot.jpg"},
    { id: 12, name: "MITSUBISHI", logo: "Mitsubishi.jpg"},
    { id: 13, name: "HONDA", logo: "Honda.jpg"},
    
  ];
  return (
    <div>
      <h2>Catálogo de Vehículos</h2>
      <div className="vehicle-grid">
        {vehicles.map(vehicle => (
          <div key={vehicle.id} className="vehicle-item">
            <Link to={`/vehicle/${vehicle.id}`}>{vehicle.name}</Link>
            <img
              src={`/logos/${vehicle.logo}`}
              alt={`${vehicle.name} logo`}
              className="vehicle-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;