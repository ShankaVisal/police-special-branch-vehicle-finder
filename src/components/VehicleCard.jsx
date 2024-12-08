import React from 'react';

const VehicleCard = ({ vehicle, onDelete }) => {
  return (
    <div className="vehicle-card" style={styles.card}>
      <img
        src={vehicle.vehicleImage || 'https://via.placeholder.com/150'}
        alt={vehicle.vehicleName}
        style={styles.image}
      />
      <div style={styles.infoContainer}>
        <h3 style={styles.title}>{vehicle.vehicleName || 'Unknown Vehicle'}</h3>
        <p><strong>Vehicle Number:</strong> {vehicle.vehicleNumber}</p>
        <p><strong>Brand:</strong> {vehicle.vehicleBrand}</p>
        <p><strong>Category:</strong> {vehicle.vehicleCategory}</p>
        <p><strong>Engine Number:</strong> {vehicle.engineNumber}</p>
        <p><strong>Chassy Number:</strong> {vehicle.chassyNumber}</p>
        <p><strong>License Number:</strong> {vehicle.revenueLicenseNumber}</p>
        <p><strong>Manufacture Year:</strong> {vehicle.manufactureYear}</p>
        <p><strong>Police Station:</strong> {vehicle.policeStation}</p>
        <p><strong>Province:</strong> {vehicle.province}</p>
        <p><strong>Officer:</strong> {vehicle.policeOfficer}</p>
        <p><strong>Temporary Location:</strong> {vehicle.temporaryLocation}</p>
        <p><strong>Garage Status:</strong> {vehicle.isInPoliceGarage ? 'In Police Garage' : 'Outside'}</p>
        <p><strong>Is Active:</strong> {vehicle.isActive ? 'Yes' : 'No'}</p>
        <p><strong>Outside Garage Location:</strong> {vehicle.outsideGarageLocation || 'N/A'}</p>
        <p><strong>Fund Amount:</strong> ${vehicle.fundAmount}</p>
      </div>
      <div style={styles.actionsContainer}>
        <button style={styles.deleteButton} onClick={() => onDelete(vehicle.vehicleNumber)}>Delete</button>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px 0',
    maxWidth: '800px',
  },
  image: {
    width: '150px',
    height: '100px',
    borderRadius: '4px',
    objectFit: 'cover',
    marginRight: '10px',
  },
  infoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: '5px',
    fontSize: '14px',
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    alignItems: 'center',
  },
  deleteButton: {
    padding: '5px 10px',
    border: 'none',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};

export default VehicleCard;
