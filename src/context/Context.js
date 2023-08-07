import { createContext, useContext, useState } from "react";
import { bookData } from "../database/DataBase";

const BookContext = createContext();

export const ContextProvider = ({ children }) => {
  const [displayData, setDisplayData] = useState(bookData);
  const [userInput, setUserInput] = useState("");

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

  const searchData = bookData.filter(
    ({ genre }) =>
      userInput !== "" &&
      genre.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
  );
  return (
    <BookContext.Provider
      value={{
        handleShelf,
        wantTOReadBooks,
        currentlyReadingBooks,
        readBooks,
        setUserInput,
        searchData,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
