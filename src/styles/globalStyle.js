import { createGlobalStyle, css } from 'styled-components';
import {color, fontSize, fontWeight, breakpoints} from 'styles/_variable.js';

export const themeLight = {
    color,
    fontSize, 
    fontWeight
}

export const GlobalStyle = createGlobalStyle`
  body {
    position: fixed;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Rubik', 'HelveticaNeue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  }
  
  input::-ms-clear,
  input::-ms-reveal {  /* clears the 'X' from Internet Explorer */
    display: none;
    width : 0;
    height: 0; 
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration { display: none; }/* clears the 'X' from Chrome */
`;

export const MediaQuery = Object.keys(breakpoints).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `;
    return accumulator;
  }, {});