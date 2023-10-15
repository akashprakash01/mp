import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateCar.css';

export default function UpdateCar() {
  const [vId, setId] = useState('');
  const [carData, setCarData] = useState(null);
  const [rcDetails, setRCDetails] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleRCDetailsChange = (e) => {
    setRCDetails(e.target.value);
  };

  const fetchCarData = () => {
    // Make an API request to fetch car data based on the provided ID
    axios.get(`http://localhost:8081/getcar/${vId}`)
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateRCDetails = () => {
    // Make an API request to update the RC details of the car based on the provided ID
    axios.put(`http://localhost:8081/updatecar/${vId}`, { rcdetails: rcDetails })
      .then(() => {
        // Clear the car data, ID, and RC details after successful update
        setCarData(null);
        setId('');
        setRCDetails('');
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (isEditing && carData) {
      setRCDetails(carData.rcdetails);
    }
  }, [isEditing, carData]);

  return (
    <div className="update-car">
      <div className="up-container">
        <header>Update RC Details</header>
        <div className="input-box">
          <label htmlFor="id">Enter ID:</label>
          <input
            type="text"
            id="id"
            name="id"
            value={vId}
            onChange={handleIdChange}
          />
          <button onClick={fetchCarData}>Retrieve Data</button>
        </div>
        {carData && (
          <div className="car-details">
            <h2>Car Details</h2>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Vehicle Name</th>
                  <th>Model Year</th>
                  <th>Fuel</th>
                  <th>Vehicle Class</th>
                  <th>Engine CC</th>
                  <th>Chassis Number</th>
                  <th>RC Details</th>
                </tr>
                <tr>
                  <td>{carData.vId}</td>
                  <td>{carData.vehicleName}</td>
                  <td>{carData.modelYear}</td>
                  <td>{carData.Fuel}</td>
                  <td>{carData.VehicleClass}</td>
                  <td>{carData.Enginecc}</td>
                  <td>{carData.Chassisnumber}</td>
                  <td>
                    {isEditing ? (
                      <input
                        type="text"
                        value={rcDetails}
                        onChange={handleRCDetailsChange}
                      />
                    ) : (
                      carData.rcdetails
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            {isEditing ? (
              <button onClick={updateRCDetails}>Save RC Details</button>
            ) : (
              <button onClick={() => setIsEditing(true)}>Edit RC Details</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
