import axios from 'axios';

export const getVehicles = async () => {
  const response = await axios.get('/api/vehicles');
  return response.data.list;
};

export const createVehicle = async (vehicleData) => {
  const response = await axios.post('/api/vehicles', vehicleData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const updateVehicle = async (vehicleNumber, updatedData) => {
  const response = await axios.put(`/api/vehicles/${vehicleNumber}`, updatedData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const deleteVehicle = async (vehicleNumber) => {
  const response = await axios.delete(`/api/vehicles/${vehicleNumber}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};
