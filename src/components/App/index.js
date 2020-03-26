import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, themeLight } from "styles/globalStyle";
import Masonry from "components/Masonry";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "components/SearchBar";
import {AppWrapper, Loading} from 'components/App/styled';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.ui.loading);

  useEffect(() => dispatch({ type: "GET_ALL_BOOK" }), []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeLight}>
        <AppWrapper>
          {isLoading && <Loading />}
          <SearchBar />
          <Masonry />
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
