import React, { useState, useEffect } from "react";
import "./AdminAuthor.css";

const AdminAuthor = () => {
  const defaultAuthors = ["Tere Liye", "Andrea Hirata", "Dewi Lestari"];
  const [authors, setAuthors] = useState(defaultAuthors);
  const [newAuthor, setNewAuthor] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

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
    <div className="admin-container">
      <h2>Daftar Penulis</h2>
      <h3 className="sub-title">📚 Daftar Isi Buku Berdasarkan Penulis</h3>

      <form onSubmit={handleAddAuthor} className="form-group">
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          placeholder="Nama penulis baru..."
        />
        <button type="submit">Tambah</button>
      </form>

      <table>
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
                  />
                ) : (
                  author
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <button onClick={() => handleUpdate(index)}>Simpan</button>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
                <button onClick={() => handleDelete(index)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAuthor;
