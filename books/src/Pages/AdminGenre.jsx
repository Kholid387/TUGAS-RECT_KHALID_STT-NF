import React, { useState, useEffect } from "react";
import "./AdminGenre.css";

const AdminGenre = () => {
  const [genres, setGenres] = useState([]);
  const [newGenre, setNewGenre] = useState("");

  useEffect(() => {
    setGenres(["Fiksi", "Romansa", "Sejarah"]);
  }, []);

  const handleAddGenre = (e) => {
    e.preventDefault();
    if (!newGenre.trim()) return;
    setGenres([...genres, newGenre]);
    setNewGenre("");
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">🎭 Daftar Genre Buku</h2>

      <form onSubmit={handleAddGenre} className="admin-form">
        <input
          type="text"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
          placeholder="Nama genre baru..."
          className="admin-input"
        />
        <button type="submit" className="admin-btn">Tambah</button>
      </form>

      <ul className="admin-list">
        {genres.map((genre, index) => (
          <li key={index} className="admin-item">
            <span>{genre}</span>
            <button
              className="delete-btn"
              onClick={() => setGenres(genres.filter((_, i) => i !== index))}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminGenre;
