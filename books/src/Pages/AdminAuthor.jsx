import React, { useState, useEffect } from "react";
import "./AdminAuthor.css";

const AdminAuthor = () => {
  const defaultAuthors = ["Tere Liye", "Andrea Hirata", "Dewi Lestari"];
  const [authors, setAuthors] = useState(defaultAuthors);
  const [newAuthor, setNewAuthor] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Ambil data dari localStorage
  useEffect(() => {
    const stored = localStorage.getItem("authors");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAuthors(parsed);
        }
      } catch {
        setAuthors(defaultAuthors);
      }
    } else {
      localStorage.setItem("authors", JSON.stringify(defaultAuthors));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("authors", JSON.stringify(authors));
  }, [authors]);

  
  const handleAddAuthor = (e) => {
    e.preventDefault();
    if (!newAuthor.trim()) return;
    setAuthors([...authors, newAuthor]);
    setNewAuthor("");
  };

 
  const handleDelete = (index) => {
    const updated = authors.filter((_, i) => i !== index);
    setAuthors(updated);
  };

  
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(authors[index]);
  };

  const handleUpdate = (index) => {
    if (!editValue.trim()) return;
    const updated = [...authors];
    updated[index] = editValue;
    setAuthors(updated);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="admin-author-container">
      <h2>📚 Daftar Buku Berdasarkan Penulis</h2>

{/* Form tambah penulis */}
      <form className="admin-form" onSubmit={handleAddAuthor}>
        <input
          type="text"
          placeholder="Nama penulis baru..."
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          className="admin-input"
        />
        <button type="submit" className="admin-btn add">
          Tambah
        </button>
      </form>

     
      <table className="admin-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Penulis</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="admin-input edit-mode"
                  />
                ) : (
                  author
                )}
              </td>
              <td>
                <div className="action-buttons">
                  {editIndex === index ? (
                    <button
                      type="button"
                      className="admin-btn save"
                      onClick={() => handleUpdate(index)}
                    >
                      Simpan
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="admin-btn edit"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    type="button"
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

export default AdminAuthor;
