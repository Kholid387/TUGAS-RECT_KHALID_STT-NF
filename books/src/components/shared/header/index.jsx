import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="p-3 text-bg-dark shadow-sm">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">

          {/* Logo */}
          <Link
            to="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#B197FC" }}></i>
            <span className="ms-2 fs-4 fw-bold">BOOKSTORE</span>
          </Link>

          {/* Menu Navigasi */}
          <ul className="nav mx-auto mb-2 mb-md-0">
            <li><Link to="/" className="nav-link px-3 text-white">Home</Link></li>
            <li><Link to="/Book" className="nav-link px-3 text-white">Books</Link></li>
            <li><Link to="/Team" className="nav-link px-3 text-white">Team</Link></li>
            <li><Link to="/Contact" className="nav-link px-3 text-white">Contact</Link></li>
          </ul>

          
          <div className="d-flex align-items-center">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

           
            <Link to="/login">
              <button type="button" className="btn-auth me-3">
                Login
              </button>
            </Link>

          
            <Link to="/register">
              <button type="button" className="btn-auth">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
