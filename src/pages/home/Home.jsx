import { FaSearch } from "react-icons/fa";

import { BookCard } from "../../components/bookCard/BookCard.jsx";

import "../home/homeStyle.css";
import { Link } from "react-router-dom";
import { useBook } from "../../context/Context.js";

export const Home = () => {

  const {currentlyReadingBooks,readBooks,wantTOReadBooks}=useBook()
  return (
    <div className="home_container">
      <Link className="go_to_search" to="/search">
        <FaSearch />
      </Link>
      <h1>Currently Reading Books</h1>
      <section className="currently__reading">
        {currentlyReadingBooks.map((book) => (
          <BookCard book={book}  />
        ))}
      </section>
      <h1>Want to read Books</h1>

      <section className="want__read">
        {wantTOReadBooks.map((book) => (
          <BookCard book={book}  />
        ))}
      </section>
      <h1>Read Books</h1>

      <section className="read">
        {readBooks.map((book) => (
          <BookCard book={book}  />
        ))}
      </section>
    </div>
  );
};
