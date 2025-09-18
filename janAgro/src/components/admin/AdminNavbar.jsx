import "bootstrap/dist/css/bootstrap.min.css";

function AdminNavbar() {
  return (
    <nav className="navbar navbar-expand-lg admin-navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-white" href="#">
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">
            <li className="nav-item">
              <a className="nav-link text-white" href="#barang-masuk">
                Barang Masuk
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#barang-keluar">
                Barang Keluar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#stok">
                Stok Barang
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-sm btn-success text-white px-3 py-2" href="#form">
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
