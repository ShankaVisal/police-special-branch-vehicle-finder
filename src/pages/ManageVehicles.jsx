import React, { useEffect, useState } from "react";
import { getVehicles, createVehicle, deleteVehicle } from "../api/vehicleApi";
import VehicleCard from "../components/VehicleCard";

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  // State for adding a vehicle with all fields from the schema
  const [newVehicle, setNewVehicle] = useState({
    vehicleNumber: "",
    vehicleName: "",
    vehicleBrand: "",
    vehicleImage: "",
    chassyNumber: "",
    engineNumber: "",
    revenueLicenseNumber: "",
    vehicleCategory: "",
    manufactureYear: "",
    policeStation: "",
    province: "",
    policeOfficer: "",
    temporaryLocation: "",
    isActive: true,
    isInPoliceGarage: true,
    outsideGarageLocation: "",
    fundAmount: 0,
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const data = await getVehicles();
      setVehicles(data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const handleCreate = async () => {
    try {
      await createVehicle(newVehicle);
      fetchVehicles();
      resetForm();
    } catch (error) {
      console.error("Error creating vehicle:", error);
    }
  };

  const handleDelete = async (vehicleNumber) => {
    try {
      await deleteVehicle(vehicleNumber);
      fetchVehicles();
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  const resetForm = () => {
    setNewVehicle({
      vehicleNumber: "",
      vehicleName: "",
      vehicleBrand: "",
      vehicleImage: "",
      chassyNumber: "",
      engineNumber: "",
      revenueLicenseNumber: "",
      vehicleCategory: "",
      manufactureYear: "",
      policeStation: "",
      province: "",
      policeOfficer: "",
      temporaryLocation: "",
      isActive: true,
      isInPoliceGarage: true,
      outsideGarageLocation: "",
      fundAmount: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setNewVehicle((prevState) => ({
        ...prevState,
        [name]: checked,
        // Reset fields depending on logic
        ...(name === "isActive" && checked
          ? {
              isInPoliceGarage: false,
              outsideGarageLocation: "",
              fundAmount: 0,
            }
          : {}),
      }));
    } else {
      setNewVehicle((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <h1>Manage Vehicles</h1>
      <h2>Add Vehicle</h2>
      <div style={styles.formContainer}>
        {/* General Vehicle Info */}
        <input
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={newVehicle.vehicleNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehicleName"
          placeholder="Vehicle Name"
          value={newVehicle.vehicleName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehicleBrand"
          placeholder="Vehicle Brand"
          value={newVehicle.vehicleBrand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="vehicleImage"
          placeholder="Vehicle Image URL"
          value={newVehicle.vehicleImage}
          onChange={handleChange}
        />
        <input
          type="text"
          name="chassyNumber"
          placeholder="Chassy Number"
          value={newVehicle.chassyNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="engineNumber"
          placeholder="Engine Number"
          value={newVehicle.engineNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="revenueLicenseNumber"
          placeholder="Revenue License Number"
          value={newVehicle.revenueLicenseNumber}
          onChange={handleChange}
        />
        <select
          name="vehicleCategory"
          value={newVehicle.vehicleCategory}
          onChange={handleChange}
          style={styles.dropdown}
        >
          <option value="">Select a Category</option>
          <option value="Truck">Truck</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Motorcycle">Motorcycle</option>
        </select>

        <input
          type="text"
          name="manufactureYear"
          placeholder="Manufacture Year"
          value={newVehicle.manufactureYear}
          onChange={handleChange}
        />
        <input
          type="text"
          name="policeStation"
          placeholder="Police Station"
          value={newVehicle.policeStation}
          onChange={handleChange}
        />
        <select
          name="province"
          value={newVehicle.province}
          onChange={handleChange}
          style={styles.dropdown}
        >
          <option value="">Select Province</option>
          <option value="Western">Western</option>
          <option value="Central">Central</option>
          <option value="Southern">Southern</option>
          <option value="Eastern">Eastern</option>
          <option value="Northern">Northern</option>
          <option value="North Western">North Western</option>
          <option value="Uva">Uva</option>
          <option value="Sabaragamuwa">Sabaragamuwa</option>
        </select>

        <input
          type="text"
          name="policeOfficer"
          placeholder="Police Officer"
          value={newVehicle.policeOfficer}
          onChange={handleChange}
        />
        <input
          type="text"
          name="temporaryLocation"
          placeholder="Temporary Location"
          value={newVehicle.temporaryLocation}
          onChange={handleChange}
        />

        {/* isActive Checkbox */}
        <label>
          <input
            type="checkbox"
            name="isActive"
            checked={newVehicle.isActive}
            onChange={handleChange}
          />
          Is Active
        </label>

        {/* Render this part only if isActive is false */}
        {!newVehicle.isActive && (
          <>
            {/* isInPoliceGarage Checkbox */}
            <label>
              <input
                type="checkbox"
                name="isInPoliceGarage"
                checked={newVehicle.isInPoliceGarage}
                onChange={handleChange}
              />
              Is in Police Garage
            </label>

            {/* Render these fields conditionally */}
            {!newVehicle.isInPoliceGarage && (
              <>
                <input
                  type="text"
                  name="outsideGarageLocation"
                  placeholder="Outside Garage Location"
                  value={newVehicle.outsideGarageLocation}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="fundAmount"
                  placeholder="Fund Amount"
                  value={newVehicle.fundAmount}
                  onChange={handleChange}
                />
              </>
            )}
          </>
        )}

        <button onClick={handleCreate} style={styles.createButton}>
          Save Vehicle
        </button>
      </div>

      <h2>Vehicles List</h2>
      <div>
        {vehicles.map((vehicle) => (
          <VehicleCard
            key={vehicle.vehicleNumber}
            vehicle={vehicle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

// Inline CSS
const styles = {
  formContainer: {
    display: "grid",
    gap: "10px",
    marginBottom: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  },
  createButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  dropdown: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
};

export default ManageVehicles;
