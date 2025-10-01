import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages";              // ✅ karena ada Pages/index.jsx
import Book from "./Pages/Book";         // ✅ karena ada Book/index.jsx
import Contact from "./Pages/Contact";   // ✅ karena ada Contact/index.jsx
import Features from "./Pages/Features"; // ✅ ini file Features.jsx
import FAQs from "./Pages/FAQs";         // ✅ ini file FAQs.jsx
import About from "./Pages/About";       // ✅ ini file About.jsx
import LoginForm from "./components/shared/LoginForm";
import Team from "./Pages/Team";         // ✅ karena ada Team/index.jsx

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="contact" element={<Contact />} />
        <Route path="features" element={<Features />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
