import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 16px Roboto, sans-serif;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100vh;
  }

  :root {
    --background: #fff;
    --border: #dcdcdc;
    --white: #fff;
    --black: #000;
    --blue: #00abff;
    --blue-hover: #03d1ff;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;