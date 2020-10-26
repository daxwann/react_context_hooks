import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ background: theme.bgColor, color: theme.textColor }}
    >
      <ul>
        <li style={{ background: theme.uiColor }}>the way of kings</li>
        <li style={{ background: theme.uiColor }}>the name of the wind</li>
        <li style={{ background: theme.uiColor }}>the final empire</li>
      </ul>
    </div>
  );
};

export default BookList;
