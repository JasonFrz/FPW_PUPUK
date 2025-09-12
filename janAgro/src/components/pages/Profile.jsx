import React from 'react'
import './Profile.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Produk');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1><center>GORONG DIBUAT COKKK</center></h1>
      <img className="hans"src="/src/image/han.jpg" alt="" />
      <img src="/src/image/download.jpg" alt="" />

      <div>
        <h1>List of Items</h1>
        <ul>
          {data.length > 0 ? (
            data.map(item => (
              <li key={item._id}>{item.name}</li>
            ))
          ) : (
            <p>No data to display TOLOL.</p>
          )}
        </ul>
      </div>

    </div>

    
  )
}

export default Profile
