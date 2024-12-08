import React, { useEffect, useState } from 'react';
import { getVehicles, createVehicle, deleteVehicle } from '../api/vehicleApi';
import VehicleCard from '../components/VehicleCard';

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    vehicleNumber: '',
    vehicleName: '',
    vehicleBrand: '',
    vehicleCategory: '',
    manufactureYear: '',
    chassyNumber: '',
    engineNumber: '',
    revenueLicenseNumber: '',
    policeStation: '',
    province: '',
    policeOfficer: '',
    temporaryLocation: '',
    isActive: true,
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const data = await getVehicles();
      setVehicles(data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({
      ...newVehicle,
      [name]: value,
    });
  };

  const handleCreate = async () => {
    try {
      await createVehicle(newVehicle);
      fetchVehicles();
      setNewVehicle({
        vehicleNumber: '',
        vehicleName: '',
        vehicleBrand: '',
        vehicleCategory: '',
        manufactureYear: '',
        chassyNumber: '',
        engineNumber: '',
        revenueLicenseNumber: '',
        policeStation: '',
        province: '',
        policeOfficer: '',
        temporaryLocation: '',
        isActive: true,
      });
    } catch (error) {
      console.error('Error creating vehicle:', error);
    }
  };

  const handleDelete = async (vehicleNumber) => {
    try {
      await deleteVehicle(vehicleNumber);
      fetchVehicles();
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  return (
    <div>
      <h1>Manage Vehicles</h1>
      
      {/* Vehicle Form */}
      <div style={formStyle}>
        <h3>Add Vehicle Details</h3>
        <input
          type="text"
          placeholder="Vehicle Number"
          name="vehicleNumber"
          value={newVehicle.vehicleNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Vehicle Name"
          name="vehicleName"
          value={newVehicle.vehicleName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Vehicle Brand"
          name="vehicleBrand"
          value={newVehicle.vehicleBrand}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Vehicle Category"
          name="vehicleCategory"
          value={newVehicle.vehicleCategory}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Manufacture Year"
          name="manufactureYear"
          value={newVehicle.manufactureYear}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Chassy Number"
          name="chassyNumber"
          value={newVehicle.chassyNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Engine Number"
          name="engineNumber"
          value={newVehicle.engineNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Revenue License Number"
          name="revenueLicenseNumber"
          value={newVehicle.revenueLicenseNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Police Station"
          name="policeStation"
          value={newVehicle.policeStation}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Province"
          name="province"
          value={newVehicle.province}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Police Officer"
          name="policeOfficer"
          value={newVehicle.policeOfficer}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Temporary Location"
          name="temporaryLocation"
          value={newVehicle.temporaryLocation}
          onChange={handleChange}
        />
        <button onClick={handleCreate} style={createButtonStyle}>
          Add Vehicle
        </button>
      </div>

      {/* Display vehicles */}
      <div>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.vehicleNumber} vehicle={vehicle} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

const formStyle = {
  border: '1px solid #aaa',
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '5px',
  maxWidth: '400px',
};

const createButtonStyle = {
  backgroundColor: '#5bc0de',
  color: 'white',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ManageVehicles;
