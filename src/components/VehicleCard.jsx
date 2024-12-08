import React from 'react';

const VehicleCard = ({ vehicle, onDelete }) => {
  return (
    <div style={cardStyle}>
      <h3>{vehicle.vehicleName}</h3>
      <p><strong>Number:</strong> {vehicle.vehicleNumber}</p>
      <button onClick={() => onDelete(vehicle.vehicleNumber)} style={deleteButtonStyle}>
        Delete
      </button>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  backgroundColor: '#f9f9f9',
};

const deleteButtonStyle = {
  backgroundColor: '#d9534f',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '3px',
  cursor: 'pointer',
};

export default VehicleCard;
