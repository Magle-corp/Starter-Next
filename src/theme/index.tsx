import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import breakpoints from './breakpoints';
import typography from "./typography";

const theme: object = {
  colors,
  breakpoints,
  typography
};

export { theme };

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
  }
`;
