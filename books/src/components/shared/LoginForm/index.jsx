import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  // Menyimpan data input pengguna
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Menyimpan pesan error / hasil login
  const [pesan, setPesan] = useState("");

  // Fungsi untuk memperbarui nilai input ketika diketik
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Fungsi saat tombol login ditekan
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!form.username || !form.email || !form.password) {
      setPesan("Semua kolom wajib diisi!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setPesan("Format email tidak valid!");
      return;
    }

    // Jika semua benar
    console.log("Data login:", form);
    setPesan("Login berhasil! Selamat datang 😊");

    // Kosongkan input
    setForm({ username: "", email: "", password: "" });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Masuk ke Akun Anda</h2>

        <form onSubmit={handleSubmit}>
          {/* Input Username */}
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Masukkan username Anda"
            />
          </div>

          {/* Input Email */}
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan email Anda"
            />
          </div>

          {/* Input Password */}
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Masukkan password Anda"
            />
          </div>

          {/* Tombol Login */}
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>

        {/* Pesan hasil login */}
        {pesan && <p className="message">{pesan}</p>}

        {/* Link ke halaman register */}
        <p className="register-link">
          Belum punya akun? <a href="/register">Daftar Sekarang</a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
