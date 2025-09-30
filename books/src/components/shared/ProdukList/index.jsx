export default function ProdukList(){
    return(
        <>
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
        </>
    )
}