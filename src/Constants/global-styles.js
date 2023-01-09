import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${() => css`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

    * {
      border: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 0;
      list-style: none;
      text-decoration: none;
      outline: none;
    };

    #root {
      position: relative;
    };

    body {
      background-color: #222;
      color: white;
      overflow-x: hidden;
    }

    body,button, input, select {
      font-family: 'Open Sans', sans-serif;
    }

    .title {
      color: #c4c4c4;
      text-align: center;
    }

    .open_menu {
      transition: height 5s ease;
      padding: 8px;
      height: fit-content;
    }

    .close_menu {
      transition: height 5s ease;
      height: 0px;
      overflow: hidden;
    }
  `}
`;
