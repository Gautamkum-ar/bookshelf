import { FaSearch } from "react-icons/fa";

import { BookCard } from "../../components/bookCard/BookCard.jsx";
import { bookData } from "../../database/DataBase.js";

import "../home/homeStyle.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
  const [displayData, setDisplayData] = useState(bookData);

  const handleShelf = (value, id) => {
    const displayBook = displayData.map((book) =>
      book.id === id ? { ...book, shelf: value } : book
    );
    setDisplayData(displayBook);
  };

  const currentlyReadingBooks = displayData.filter(
    ({ shelf }) => shelf === "Currently reading"
  );
  const wantTOReadBooks = displayData.filter(
    ({ shelf }) => shelf === "Want to read"
  );
  const readBooks = displayData.filter(({ shelf }) => shelf === "Read");

  return (
    <div className="home_container">
      <Link className="go_to_search" to="/search">
        <FaSearch />
      </Link>
      <h1>Currently Reading Books</h1>
      <section className="currently__reading">
        {currentlyReadingBooks.map((book) => (
          <BookCard book={book} handleShelf={handleShelf} />
        ))}
      </section>
      <h1>Want to read Books</h1>

      <section className="want__read">
        {wantTOReadBooks.map((book) => (
          <BookCard book={book} handleShelf={handleShelf} />
        ))}
      </section>
      <h1>Read Books</h1>

      <section className="read">
        {readBooks.map((book) => (
          <BookCard book={book} handleShelf={handleShelf} />
        ))}
      </section>
    </div>
  );
};
