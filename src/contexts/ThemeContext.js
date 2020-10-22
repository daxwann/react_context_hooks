import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = { 
    isLightTheme: true,
    light: {
      textColor: "#555",
      uiColor: "#ddd",
      bgColor: "#eee"
    },
    dark: {
      textColor: "#ddd",
      uiColor: "#333",
      bgColor: "#555"
    }
   }

  render() { 
    return ( 
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;