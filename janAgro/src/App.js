import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Produk');
        
        // Log the data here to see what you received
        console.log('Fetched data:', response.data); 
        
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []); // The empty array ensures this runs only once

  // Function to handle adding new data
  const handleAddItem = async () => {
    try {
      // Send a POST request to your backend's API
      await axios.post('http://localhost:5000/api/Produk', { name: newItemName });
      setNewItemName('');
      // After adding, fetch the updated list to refresh the UI
      const response = await axios.get('http://localhost:5000/api/Produk');
      setItems(response.data);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h1>MongoDB React App</h1>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="Enter new item name"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;