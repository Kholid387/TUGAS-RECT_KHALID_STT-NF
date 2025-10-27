import { BrowserRouter, Routes, Route } from "react-router-dom";

// Halaman Utama
import Home from "./Pages";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";
import FAQs from "./Pages/FAQs";
import About from "./Pages/About";
import Team from "./Pages/Team";
import LoginForm from "./components/shared/LoginForm";

// Komponen dan Halaman Admin
import AdminLayout from "./components/AdminLayout";
import AdminGenre from "./Pages/AdminGenre";
import AdminAuthor from "./Pages/AdminAuthor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ====== Halaman Utama ====== */}
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<LoginForm />} />

        {/* ====== Halaman Admin ====== */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="genre" element={<AdminGenre />} />
          <Route path="author" element={<AdminAuthor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
