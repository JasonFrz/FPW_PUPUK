import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/User/123"); 
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card shadow-lg p-4">
        <div className="text-center">
          {/* Foto profil */}
          <div className="profile-img-container">
            <img
              className="profile-img"
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : "/src/image/farmer.png"
              }
              alt="Profile"
            />
            <label htmlFor="fileInput" className="upload-btn">
              📷 Ubah Foto
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </div>

          <h2 className="mt-3">{user ? user.name : "Loading..."}</h2>
          <p className="text-muted">{user ? user.email : "..."}</p>
        </div>

        {/* Info user */}
        <div className="profile-info mt-4">
          <h4>Detail User</h4>
          {user ? (
            <ul>
              <li><b>Username:</b> {user.username}</li>
              <li><b>Category:</b> {user.category}</li>
              <li><b>Phone:</b> {user.phone}</li>
              <li><b>Address:</b> {user.address}</li>
            </ul>
          ) : (
            <p>Memuat data...</p>
          )}
        </div>

        {/* Tombol aksi */}
        <div className="text-center mt-4">
          <button className="btn btn-success px-4">💾 Simpan Perubahan</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
