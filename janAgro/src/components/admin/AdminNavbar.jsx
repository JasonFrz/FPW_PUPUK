import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark admin-navbar">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#">
      🗄️ Admin Inventaris
    </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
          aria-controls="adminNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3" style={{color:"white"}}>
            <li className="nav-item">
              <a className="nav-link" href="#barang-masuk">
                Barang Masuk
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#barang-keluar">
                Barang Keluar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#stok">
                Stok Barang
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-sm btn-success" href="#">
                + Tambah Barang
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
