import React, { useState } from 'react';
import './home.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function HomePage() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Add your logout logic here
    alert('Logout clicked'); // You can replace this with your actual logout code
  };

  return (
    <>
      <div className='pname' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        <h1>ADMIN</h1>
        {showDropdown && (
          <div className='dropdown'>
            <p onClick={handleLogout}>Logout</p>
          </div>
        )}
      </div>
      <div className='bac'>
        <div className='head'>
          <h2 className='hh2'>cars</h2>
        </div>
        <ul className='st'>
          <li><a href="/viewcars">VIEW CARS</a></li>
          <li><Link to="/addcars">ADD CARS</Link></li>
          <li><Link to="/updatecars">UPDATE CARS</Link></li>
          <li><Link to="/deletecars">DELETE CARS</Link></li>
          <li><a href="#Docs">PENDING DOCS</a></li>
          
        </ul>
        <ul className='trip'>
        <li className='tripo'><a href="#Docs">Trip Details</a></li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
