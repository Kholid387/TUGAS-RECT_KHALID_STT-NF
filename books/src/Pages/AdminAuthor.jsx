import React, { useState, useEffect } from "react";
import "./AdminAuthor.css";


const AdminAuthor = () => {
  const [authors, setAuthors] = useState([]);
  const [newAuthor, setNewAuthor] = useState("");

  useEffect(() => {
    setAuthors(["Tere Liye", "Andrea Hirata", "Dewi Lestari"]);
  }, []);

  const handleAddAuthor = (e) => {
    e.preventDefault();
    if (!newAuthor.trim()) return;
    setAuthors([...authors, newAuthor]);
    setNewAuthor("");
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">📚 Daftar Penulis</h2>

      <form onSubmit={handleAddAuthor} className="admin-form">
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          placeholder="Nama penulis baru..."
          className="admin-input"
        />
        <button type="submit" className="admin-btn">Tambah</button>
      </form>

      <ul className="admin-list">
        {authors.map((author, index) => (
          <li key={index} className="admin-item">
            <span>{author}</span>
            <button
              className="delete-btn"
              onClick={() => setAuthors(authors.filter((_, i) => i !== index))}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAuthor;
