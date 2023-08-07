import { useBook } from "../../context/Context";
import "../bookCard/cardStyle.css";

export const BookCard = ({ book, }) => {

  const {handleShelf}=useBook()
  const { imageUrl, title, id, shelf, genre, author } = book;

  

  return (
    <div key={id} className="book__card">
      <section className="book__image">
        <img src={imageUrl} alt={title} />
      </section>
      <section className="book__details">
        <div className="action__controls">
          <select onChange={(e) => handleShelf(e.target.value, id)}>
            <option selected={shelf === "Want to read"} value="Want to read">
              Want to read
            </option>
            <option
              selected={shelf === "Currently reading"}
              value="Currently reading"
            >
              Currently reading
            </option>
            <option selected={shelf === "Read"} value="Read">
              Read
            </option>
            <option value="none">None</option>
          </select>
        </div>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{genre}</p>
      </section>
    </div>
  );
};
