import { FaArrowLeft } from "react-icons/fa";
import "../search/searchStyle.css";
import { Link } from "react-router-dom";
import { bookData } from "../../database/DataBase";
import { useState } from "react";
import { BookCard } from "../../components/bookCard/BookCard";

export const Search = () => {
  const [userInput, setUserInput] = useState("");

  const searchData = bookData.filter(
    ({ genre }) =>
      userInput !== "" &&
      genre.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
  );
  return (
    <div className="search__container">
      <Link className="back_to_Home" to="/">
        <FaArrowLeft />
      </Link>
      <input
        className="search__input"
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
      />

      <div className="searched__data">
        {searchData?.map((book) => (
          <BookCard book={book} dis="true" />
        ))}
      </div>
    </div>
  );
};
