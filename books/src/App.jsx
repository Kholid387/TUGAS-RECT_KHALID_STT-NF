function App() {
  return (
    <>
      {/* Navbar */}
      <header className="p-3 text-bg-dark shadow-sm">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            
            {/* Logo */}
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "#B197FC" }}
              ></i>
              <span className="ms-2 fs-4 fw-bold">BOOKSTORE</span>
            </a>

            {/* Menu Navigasi */}
            <ul className="nav mx-auto mb-2 mb-md-0">
              <li><a href="#" className="nav-link px-3 text-white">Home</a></li>
              <li><a href="#" className="nav-link px-3 text-white">Books</a></li>
              <li><a href="#" className="nav-link px-3 text-white">Team</a></li>
              <li><a href="#" className="nav-link px-3 text-white">Contact</a></li>
            </ul>

            {/* Search & Auth */}
            <div className="d-flex align-items-center">
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  className="form-control form-control-dark text-bg-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://picsum.photos/700/500"
              className="d-block mx-lg-auto img-fluid shadow-lg rounded-3"
              alt="Hero"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-dark">
              BERANI KAYA BERANI TAKWA
            </h1>
            <p className="lead text-muted">
              CARA MEMPERKAYA DIRI SENDIRI DENGAN BERTAKWA
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                BUY NOW
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                DETAIL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="fw-bold mb-3">Best Seller</h2>
          <p className="lead text-muted">
            Koleksi buku pilihan yang paling banyak diminati pembaca kami.
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {[11, 12, 13].map((num, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm h-100">
                  <img
                    src={`https://picsum.photos/400/250?random=${num}`}
                    className="card-img-top"
                    alt={`Book ${i + 1}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Best Seller {i + 1}</h5>
                    <p className="card-text text-muted">
                      Deskripsi singkat buku best seller yang menarik perhatian
                      pembaca.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-sm btn-outline-primary">
                        Detail
                      </button>
                      <span className="fw-bold text-primary">Rp {75 + i * 10}.000</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Album Section */}
      <section className="album py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Our Collection</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {[
              {
                title: "The Great Adventure",
                desc: "Novel epik tentang petualangan dan persahabatan.",
                price: "Rp 75.000",
                img: 1,
              },
              {
                title: "Learning React",
                desc: "Panduan praktis memahami dasar-dasar React.",
                price: "Rp 95.000",
                img: 2,
              },
              {
                title: "Mystery of The Lost City",
                desc: "Kisah penuh misteri dan rahasia kota hilang.",
                price: "Rp 80.000",
                img: 3,
              },
            ].map((book, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm h-100">
                  <img
                    src={`https://picsum.photos/400/250?random=${book.img}`}
                    className="card-img-top"
                    alt={book.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">{book.desc}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">
                          Detail
                        </button>
                        <button className="btn btn-sm btn-success">Beli</button>
                      </div>
                      <span className="fw-bold">{book.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

           {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Features</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">FAQs</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">About</a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            © 2025 <strong>Bookstore</strong>, Inc
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;

