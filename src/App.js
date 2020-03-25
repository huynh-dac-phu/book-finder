import React, {useEffect} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, themeLight } from "styles/globalStyle";
import Masonry from "components/Masonry";
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch({type: 'GET_ALL_BOOK'}), []);

  const AppWrapper = styled.div`
    background-color: #fff;
  `
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeLight}>
        <AppWrapper  >
          <Masonry />
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
