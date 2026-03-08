import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-user-select: none;
    user-select: none;
  }

  input, textarea {
    -webkit-user-select: text;
    user-select: text;
  }

  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow-y: hidden;
    cursor: none;
  }

  #root {
    min-height: 100vh;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #FFFBFD;
  }

  #root {
    font-family: 'Pretendard', sans-serif;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: 'Pretendard', sans-serif;
  }

  p {
    margin: 0;
    font-family: 'Pretendard', sans-serif;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button, input, textarea {
    font-family: 'Pretendard', sans-serif;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyles;