// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomepageContent from "./components/pages/HomepageContent";
import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Footer from "./components/Footer";

// Halaman admin
import AdminPage from "./components/admin/AdminPage";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onNavigate={handleNavigate} />;
      case "register":
        return <Register onNavigate={handleNavigate} />;
      case "shop":
        return <Shop />;
      case "about":
        return <About />;
      case "profile":
        return <Profile />;
      case "admin":
        return <AdminPage onNavigate={handleNavigate} />;

      case "services":
        return (
          <div
            style={{
              padding: "4rem 2rem",
              textAlign: "center",
              background: "linear-gradient(135deg, #1a4c3e 0%, #2d7a5f 100%)",
              minHeight: "100vh",
              color: "#d1fae5",
            }}
          >
            <h1
              style={{
                color: "#4ade80",
                fontSize: "3rem",
                marginBottom: "2rem",
              }}
            >
              🌾 Our Services
            </h1>
            <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
              Coming Soon! We're working on something amazing for you.
            </p>
            <div style={{ fontSize: "4rem", animation: "bounce 2s infinite" }}>
              🚧
            </div>
          </div>
        );

      case "contact":
        return (
          <div
            style={{
              padding: "4rem 2rem",
              textAlign: "center",
              background: "linear-gradient(135deg, #1a4c3e 0%, #2d7a5f 100%)",
              minHeight: "100vh",
              color: "#d1fae5",
            }}
          >
            <h1
              style={{
                color: "#4ade80",
                fontSize: "3rem",
                marginBottom: "2rem",
              }}
            >
              📞 Contact Us
            </h1>
            <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
              Get in touch with our gardening experts!
            </p>
            <div
              style={{
                fontSize: "1.2rem",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <p style={{ marginBottom: "1rem" }}>
                📧 janagronusantara@gmail.com
              </p>
              <p style={{ marginBottom: "1rem" }}>📱 +62 811 762 788</p>
              <p style={{ marginBottom: "1rem" }}>🏪 Surabaya, Jawa Timur</p>
            </div>
            <div style={{ fontSize: "3rem", marginTop: "2rem" }}>🌱🌿🍀</div>
          </div>
        );

      default:
        return <HomepageContent />;
    }
  };

  return (
    <div className="App">
      {/* Navbar bisa disembunyikan di halaman admin */}
      {currentPage !== "admin" && (
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      {renderPage()}
      {currentPage !== "admin" && <Footer />}
    </div>
  );
}

export default App;
