import React from "react";

function AdminDashboard({ onNavigate }) {
  return (
    <div style={{ padding: "2rem", minHeight: "100vh", background: "#f0f4f8" }}>
      <h1>Admin Dashboard</h1>
      <p>Selamat datang di panel admin 🚀</p>

      <div style={{ marginTop: "2rem" }}>
        <button
          onClick={() => onNavigate("home")}
          style={{
            padding: "0.7rem 1.2rem",
            borderRadius: "8px",
            border: "none",
            background: "#2d7a5f",
            color: "white",
            cursor: "pointer",
          }}
        >
          🔙 Kembali ke Home
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
