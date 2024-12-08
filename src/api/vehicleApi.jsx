import axios from 'axios';

export const getVehicles = async () => {
  try {
    const response = await axios.get('/api/vehicles');
    console.log('Vehicles Response:', response.data);
    return response.data.list;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
  }
};

export const createVehicle = async (vehicleData) => {
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    const response = await axios.post('/api/vehicles', vehicleData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Create Vehicle Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating vehicle:', error);
  }
};

export const updateVehicle = async (vehicleNumber, updatedData) => {
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    const response = await axios.put(`/api/vehicles/${vehicleNumber}`, updatedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Update Vehicle Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating vehicle:', error);
  }
};

export const deleteVehicle = async (vehicleNumber) => {
  try {
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    const response = await axios.delete(`/api/vehicles/${vehicleNumber}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Delete Vehicle Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting vehicle:', error);
  }
};
