import React from "react";
import books from "../../Utils/books";   // pastikan "Utils" sesuai kapitalisasi folder
import styles from "../styles/Books.module.css";

function Books() {
  return (
    <div>
      <section className={styles.books}>
        <h2 className={styles.title}>Daftar Buku Kami</h2>
        <div className={styles.cardContainer}>
          {books.map((book) => (
            <div key={book.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{book.title}</h3>
              <p className={styles.cardDescription}>
                {book.author} - {book.year}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Books;
