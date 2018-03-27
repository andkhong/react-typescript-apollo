import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    position: relative;
    padding: 0;
    margin: 0;

    .main-content {
      margin-top: 64px;
      padding-bottom: 10%;
      min-height: 100vh;
      display: block;
    }
  }
  a {
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    text-transform: capitalize;
  }

  p {
    margin: 0;
  }

  ul, li {
    list-style-type: none;
  }
  
  svg {
    fill: currentColor;
    path {
      fill: currentColor;
    }
  }
`;
