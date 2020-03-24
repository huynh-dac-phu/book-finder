import React, {useEffect, useState} from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, themeLight } from "styles/globalStyle";
import ColorMasonry from "components/Masonry/ColorMasonry";
import {useDispatch} from 'react-redux';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(20);
  const dispatch = useDispatch();
  useEffect(() => dispatch({type: 'GET_ALL_BOOK'}), []);

  const handleScroll = event => {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // loadMoreActionCreator(count);
      console.log(count)
      setCount(count + 20);
    }
  };

  const AppWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    overflow: scroll;
  `
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={themeLight}>
        <AppWrapper className="App" onSroll={handleScroll} >
          <ColorMasonry />
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
