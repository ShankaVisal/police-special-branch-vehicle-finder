import React, { useEffect, useState } from 'react';
import { getVehicles, createVehicle, deleteVehicle } from '../api/vehicleApi';
import VehicleCard from '../components/VehicleCard';

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [newVehicle, setNewVehicle] = useState({
    vehicleNumber: '',
    vehicleName: '',
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

  const handleCreate = async () => {
    try {
      await createVehicle(newVehicle);
      fetchVehicles();
      setNewVehicle({ vehicleNumber: '', vehicleName: '' });
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
      <input
        type="text"
        placeholder="Vehicle Number"
        value={newVehicle.vehicleNumber}
        onChange={(e) => setNewVehicle({ ...newVehicle, vehicleNumber: e.target.value })}
      />
      <input
        type="text"
        placeholder="Vehicle Name"
        value={newVehicle.vehicleName}
        onChange={(e) => setNewVehicle({ ...newVehicle, vehicleName: e.target.value })}
      />
      <button onClick={handleCreate}>Add Vehicle</button>

      <div>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.vehicleNumber} vehicle={vehicle} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default ManageVehicles;
