import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminPage.css";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

function AdminPage() {
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [barangKeluar, setBarangKeluar] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "",
    harga: "",
    keterangan: "",
  });

  const [produk, setProduk] = useState([]);
  //const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Produk');
        setProduk(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/BarangMasuk');
        setBarangMasuk(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/BarangKeluar');
        setBarangKeluar(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

const postBarangM = async () => {
  const dataToSend = {
    ...formData,
    id: barangMasuk.length + 1,
    jumlah: Number(formData.jumlah),
    harga: Number(formData.harga),
  };
  try {
    const response = await axios.post('http://localhost:5000/api/BarangMasuk', dataToSend);
    console.log('Data posted successfully:', response.data);
  } catch (error) {
    console.error('Error posting data:', error);
  }
};

const postBarangK = async () => {
  const dataToSend = {
    ...formData,
    id: barangKeluar.length + 1,
    jumlah: Number(formData.jumlah),
    harga: Number(formData.harga),
  };
  try {
    const response = await axios.post('http://localhost:5000/api/BarangKeluar', dataToSend);
    console.log('Data posted successfully:', response.data);
  } catch (error) {
    console.error('Error posting data:', error);
  }
};


const deleteBarangM = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/BarangMasuk/${id}`);
    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};


const deleteBarangK = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/BarangKeluar/${id}`);
    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/Category');
  //       setCategory(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tambahBarangMasuk = () => {
    postBarangM();
    setBarangMasuk([...barangMasuk, { ...formData, id: Date.now() }]);
    setFormData({ nama: "", jumlah: "", harga: "", keterangan: "" });
  };

  const tambahBarangKeluar = () => {
    postBarangK();
    setBarangKeluar([...barangKeluar, { ...formData, id: Date.now() }]);
    setFormData({ nama: "", jumlah: "", harga: "", keterangan: "" });
  };

  const hapusBarang = (id, type) => {
    if (type === "masuk") {
      deleteBarangM(id);
      setBarangMasuk(barangMasuk.filter((item) => item.id !== id));
    } else {
      deleteBarangK(id);
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
               <select 
                 name="nama" 
                 id="nama" 
                 className="form-select" 
                 value={formData.nama} 
                 onChange={handleChange}
               >
                <option value="" disabled>Pilih Produk...</option>
                
                {produk.map(product => (
                  <option key={product.id} value={product.name}>{product.name}</option>
                ))}
                
               </select>
            </div>
            <div className="col-md-1">
              <input
                type="number"
                className="form-control"
                name="jumlah"
                placeholder="QTY"
                value={formData.jumlah}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"   
                className="form-control"
                name="harga"
                placeholder="Harga"
                value={formData.harga}
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
    <table className="table bg-dark table-striped table-hover">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Jumlah</th>
          <th>Harga</th>
          <th>Keterangan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {barangMasuk.map((item) => (
          <tr key={item.id}>
            <td>{item.nama}</td>
            <td>{item.jumlah}</td>
            <td>{item.harga}</td>
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
            <td colSpan="5" className="text-center text-muted">
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
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Jumlah</th>
          <th>Harga</th>
          <th>Keterangan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {barangKeluar.map((item) => (
          <tr key={item.id}>
            <td>{item.nama}</td>
            <td>{item.jumlah}</td>
            <td>{item.harga}</td>
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
            <td colSpan="5" className="text-center text-muted">
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
