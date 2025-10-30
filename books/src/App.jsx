import { BrowserRouter, Routes, Route } from "react-router-dom";

// ===== Halaman Umum =====
import Home from "./Pages";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";
import FAQs from "./Pages/FAQs";
import About from "./Pages/About";
import Team from "./Pages/Team";
import LoginForm from "./components/shared/LoginForm";
import Register from "./Pages/Register";

// ===== Halaman Admin =====
import AdminLayout from "./components/AdminLayout";
import AdminGenre from "./Pages/AdminGenre";
import AdminAuthor from "./Pages/AdminAuthor";

// ===== Komponen Proteksi =====
import ProtectedRoute from "./components/shared/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===========================
             HALAMAN UMUM
        ============================ */}
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />

        {/* HALAMAN ADMIN (PROTECTED) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="genre"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminGenre />
              </ProtectedRoute>
            }
          />
          <Route
            path="author"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminAuthor />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
