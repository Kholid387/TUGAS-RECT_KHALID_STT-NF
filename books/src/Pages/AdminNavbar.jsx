import { Link } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="admin-navbar-left">
        <h2 className="logo">Admin Dashboard Khalid Shafwan</h2>
      </div>
      <ul className="admin-navbar-links">
        <li>
          <Link to="/admin/genre">Genre</Link>
        </li>
        <li>
          <Link to="/admin/author">Author</Link>
        </li>
        <li>
          <Link to="/">Kembali ke Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
