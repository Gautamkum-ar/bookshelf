import { FaArrowLeft } from "react-icons/fa";
import "../search/searchStyle.css";
import { Link } from "react-router-dom";
import { BookCard } from "../../components/bookCard/BookCard";
import { useBook } from "../../context/Context";

export const Search = () => {
  const { searchData, setUserInput } = useBook();

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
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};
