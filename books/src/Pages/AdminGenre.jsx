import React, { useState, useEffect } from "react";
import "./AdminGenre.css";

const AdminGenre = () => {
  const defaultGenres = ["Fiksi", "Non-Fiksi", "Romantis", "Petualangan"];
  const [genres, setGenres] = useState(defaultGenres);
  const [newGenre, setNewGenre] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("genres");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setGenres(parsed);
        }
      } catch {
        setGenres(defaultGenres);
      }
    } else {
      localStorage.setItem("genres", JSON.stringify(defaultGenres));
    }
  }, []);

  // Simpan perubahan ke localStorage
  useEffect(() => {
    localStorage.setItem("genres", JSON.stringify(genres));
  }, [genres]);

  // Tambah genre baru
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newGenre.trim()) return;
    setGenres([...genres, newGenre]);
    setNewGenre("");
  };

  // Hapus genre
  const handleDelete = (index) => {
    const updated = genres.filter((_, i) => i !== index);
    setGenres(updated);
  };

  // Edit genre
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(genres[index]);
  };

  // Simpan hasil edit
  const handleUpdate = (index) => {
    if (!editValue.trim()) return;
    const updated = [...genres];
    updated[index] = editValue;
    setGenres(updated);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="admin-container">
      <h2>Kelola Genre Buku</h2>
      <h3 className="sub-title">📖 Daftar Kategori Buku Berdasarkan Genre</h3>

      {/* Form tambah genre */}
      <form onSubmit={handleAdd} className="form-group">
        <input
          type="text"
          placeholder="Masukkan genre baru..."
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
        />
        <button type="submit" className="admin-btn add">Tambah</button>
      </form>

      {/* Tabel genre */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Genre</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    style={{ width: "90%" }}
                  />
                ) : (
                  genre
                )}
              </td>
              <td>
                <div className="action-buttons">
                  {editIndex === index ? (
                    <button
                      className="admin-btn save"
                      onClick={() => handleUpdate(index)}
                    >
                      Simpan
                    </button>
                  ) : (
                    <button
                      className="admin-btn edit"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminGenre;
