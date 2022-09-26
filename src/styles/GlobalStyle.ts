import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: white;
    color: aliceblue;
    -webkit-font-smoothing: antialeased;
    letter-spacing: 0.5px;
  }
  body, input, button {
    font-family: 'Roboto Flex', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
