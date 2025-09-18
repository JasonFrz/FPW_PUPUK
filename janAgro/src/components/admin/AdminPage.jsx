import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminPage.css";
import AdminNavbar from "./AdminNavbar";

function AdminPage() {
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [barangKeluar, setBarangKeluar] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "",
    keterangan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tambahBarangMasuk = () => {
    setBarangMasuk([...barangMasuk, { ...formData, id: Date.now() }]);
    setFormData({ nama: "", jumlah: "", keterangan: "" });
  };

  const tambahBarangKeluar = () => {
    setBarangKeluar([...barangKeluar, { ...formData, id: Date.now() }]);
    setFormData({ nama: "", jumlah: "", keterangan: "" });
  };

  const hapusBarang = (id, type) => {
    if (type === "masuk") {
      setBarangMasuk(barangMasuk.filter((item) => item.id !== id));
    } else {
      setBarangKeluar(barangKeluar.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="admin-page">
      <AdminNavbar />

      <div className="container py-5">
        <h1 className="text-center text-light mb-4">
          📦 Sistem Inventaris Barang
        </h1>

        {/* Form Input */}
        <div className="card p-4 shadow-sm mb-5">
          <h4 className="mb-3" style={{color:"white"}}>Tambah Data</h4>
          <div className="row g-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                name="nama"
                placeholder="Nama Barang"
                value={formData.nama}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                className="form-control"
                name="jumlah"
                placeholder="Jumlah"
                value={formData.jumlah}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                name="keterangan"
                placeholder="Keterangan"
                value={formData.keterangan}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 d-flex gap-2">
              <button
                className="btn btn-success w-100"
                onClick={tambahBarangMasuk}
              >
                Masuk
              </button>
              <button
                className="btn btn-danger w-100"
                onClick={tambahBarangKeluar}
              >
                Keluar
              </button>
            </div>
          </div>
        </div>

        {/* Barang Masuk */}
        <section id="barang-masuk" className="mb-5">
          <h3 className="text-light">📥 Barang Masuk</h3>
          <div className="table-responsive">
            <table className="table table-striped table-hover" >
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Jumlah</th>
                  <th>Keterangan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {barangMasuk.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nama}</td>
                    <td>{item.jumlah}</td>
                    <td>{item.keterangan}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => hapusBarang(item.id, "masuk")}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
                {barangMasuk.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">
                      Belum ada data barang masuk
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Barang Keluar */}
        <section id="barang-keluar">
          <h3 className="text-light">📤 Barang Keluar</h3>
          <div className="table-responsive">
            <table className="table table-striped table-hover"  style={{backgroundColor:"#4ade80"}}>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Jumlah</th>
                  <th>Keterangan</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {barangKeluar.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nama}</td>
                    <td>{item.jumlah}</td>
                    <td>{item.keterangan}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => hapusBarang(item.id, "keluar")}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
                {barangKeluar.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center text-muted">
                      Belum ada data barang keluar
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminPage;
