import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;

  render() { 
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div className='book-list' style={{background: theme.bgColor, color: theme.textColor}}>
        <ul>
          <li style={{background: theme.uiColor}}>the way of kings</li>
          <li style={{background: theme.uiColor}}>the name of the wind</li>
          <li style={{background: theme.uiColor}}>the final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;