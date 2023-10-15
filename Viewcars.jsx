import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './viewcars.css';

export default function Viewcars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8081/viewcars')
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bac">
      <table className="responsive-table">
        <caption>View Cars</caption>
        <table className="styled-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Vehicle Name</th>
              <th scope="col">Model Year</th>
              <th scope="col">Fuel</th>
              <th scope="col">Vehicle Class</th>
              <th scope="col">Engine CC</th>
              <th scope="col">Chassis Number</th>
              <th scope="col">RC Details</th>
              <th scope="col">Car Image</th>
              <th scope="col">Insurance Image</th>
              <th scope="col">Pollution Certificate Image</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.vId}>
                <td>{car.vId}</td>
                <td>{car.vehicleName}</td>
                <td>{car.modelYear}</td>
                <td>{car.Fuel}</td>
                <td>{car.VehicleClass}</td>
                <td>{car.Enginecc}</td>
                <td>{car.Chassisnumber}</td>
                <td>{car.rcdetails}</td>
                <td>
                  <img src={`http://localhost:8081/uploads/${car.carImage}`} alt={car.carImage} />
                  <div>{car.carImage}</div>
                </td>
                <td>
                  <img src={`http://localhost:8081/uploads/${car.insuranceImage}`} alt={car.insuranceImage} />
                  <div>{car.insuranceImage}</div>
                </td>
                <td>
                  <img src={`http://localhost:8081/uploads/${car.pollutionCertificateImage}`} alt={car.pollutionCertificateImage} />
                  <div>{car.pollutionCertificateImage}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </table>
    </div>
  );
}
