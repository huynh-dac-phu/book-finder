import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, themeLight } from "styles/globalStyle";
import ColorMasonry from "components/Masonry/ColorMasonry";

function App() {
  
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeLight}>
        <div className="App">
          <ColorMasonry />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
