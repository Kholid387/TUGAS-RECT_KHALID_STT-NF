import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/header";
import Hero from "../../components/shared/hero";
import books from "../../utils/books";

export default function Book() {
  return (
    <>
    
      <Header />
      <Hero />
      <div style={{ padding: "20px" }}>
        <h1>Halaman Book</h1>
        <h2>Daftar Buku</h2>

        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>ID</th>
              <th>Judul</th>
              <th>Penulis</th>
              <th>Tahun</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <Footer />
    </>
  );
}
