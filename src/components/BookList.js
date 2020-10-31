import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ background: theme.bgColor, color: theme.textColor }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li style={{ background: theme.uiColor }} key={book.id}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
