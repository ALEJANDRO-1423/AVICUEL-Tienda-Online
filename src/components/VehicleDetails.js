// src/components/VehicleDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function VehicleDetails() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalles del Vehículo {id}</h2>
      <p>ROJO CON AMARILLO VEHICULO A GRANDE ESCALA DE COLORES Y DE TODO UN POCO  {id}</p>
      {/* Aquí podrías agregar más información sobre el vehículo */}
    </div>
  );
}

export default VehicleDetails;
