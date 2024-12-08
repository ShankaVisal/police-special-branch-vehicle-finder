import React from 'react';

const VehicleCard = ({ vehicle, onDelete }) => {
  return (
    <div style={cardStyle}>
      <h3>{vehicle.vehicleName || 'Unknown Vehicle'}</h3>
      <p><strong>Vehicle Number:</strong> {vehicle.vehicleNumber}</p>
      <p><strong>Brand:</strong> {vehicle.vehicleBrand}</p>
      <p><strong>Category:</strong> {vehicle.vehicleCategory}</p>
      <p><strong>Manufacture Year:</strong> {vehicle.manufactureYear}</p>
      <p><strong>Chassy Number:</strong> {vehicle.chassyNumber}</p>
      <p><strong>Engine Number:</strong> {vehicle.engineNumber}</p>
      <p><strong>Revenue License Number:</strong> {vehicle.revenueLicenseNumber}</p>
      <p><strong>Police Station:</strong> {vehicle.policeStation}</p>
      <p><strong>Province:</strong> {vehicle.province}</p>
      <p><strong>Police Officer:</strong> {vehicle.policeOfficer}</p>
      <p><strong>Is Active:</strong> {vehicle.isActive ? 'Yes' : 'No'}</p>
      <p><strong>Temporary Location:</strong> {vehicle.temporaryLocation}</p>
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
