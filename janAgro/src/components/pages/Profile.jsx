import './Profile.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Profile = () => {
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  



 useEffect(() => {
    localStorage.setItem("a",selectedImage)
 },[selectedImage])
  


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
    <br/>

      {selectedImage && (
        
        <div>
          <h2>The Image:</h2>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br /> <br />
          {/* Button to remove the selected image */}
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <br />
      <h2>Pilih Gambar</h2>
     <input
        type="file"
        name="myImage"
        // Event handler to capture file selection and update the state
        onChange={(event) => {
          console.log(event.target.files[0]); // Log the selected file
          setSelectedImage(event.target.files[0]); // Update the state with the selected file
        }}
      />


      <div>
        <h1>List of Items</h1>
        <ul>
          {data.length > 0 ? (
            data.map(item => (
              <li key={item._id}>
                {item.name}
                {item.category}
                {item.price}
                {item.image}
                {item.description}
                {item.rating}
                {item.inStock}
                </li>
              
            ))
          ) : (
            <p>No data to display.</p>
          )}
        </ul>
      </div>

    </div>

    
  )
}

export default Profile
