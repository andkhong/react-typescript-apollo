import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    font-family: 'Montserrat', sans-serif;
    min-height: 100%;
    position: relative;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  a {
    cursor: pointer;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
  }
`;
