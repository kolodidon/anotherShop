import { createGlobalStyle } from "styled-components";
import RalewayTtf from '../fonts/Raleway-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayTtf}) format('ttf');
  }
  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
  }
`;

export default GlobalStyle;