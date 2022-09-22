import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 1200px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }

  ol, ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;
