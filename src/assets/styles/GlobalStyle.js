import { createGlobalStyle } from "styled-components";
import { textColor } from "../../constants/colors";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    font-family: 'Lexend Deca', sans-serif;
    line-height: 1;
    color: ${textColor};
    background-color: #f2f2f2;
  }
  * {
    box-sizing: border-box;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
  }
  input {
    padding: 8px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    outline: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    ::placeholder {
      color: #DBDBDB;
    }
  }
  h2 {
    font-family: 'Playball', cursive;
    color: #FFFFFF;
    font-size: 40px;
    line-height: 50px;
  }

`;

export default GlobalStyle;
