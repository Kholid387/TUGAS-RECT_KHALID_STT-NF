import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages";
import Book from "./Pages/Book";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";
import FAQs from "./Pages/FAQs";
import About from "./Pages/About";
import LoginForm from "./components/shared/LoginForm";
import Team from "./Pages/Team";


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
        <Route path="team" element={<Team />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
