import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway Regular';
    src: url(${'../fonts/Raleway/Raleway-Regular.ttf'}) format('ttf');
  }
  @font-face {
    font-family: 'Montserrat Regular';
    src: url(${'../fonts/Montserrat/Montserrat-Regular.ttf'}) format('ttf');
  }
  body {
    font-family: 'Raleway Regular', sans-serif;
  }
  a {
    text-decoration: none;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
    background: #ffffff;
  }
  :active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  `;


export default GlobalStyle;
